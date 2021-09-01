// 載入express & express router
const express = require('express')
const router = express.Router()

// 載入Record model
const Record = require('../../models/Record')

// 載入moment(轉換date format)
const moment = require('moment')

// 載入category icon
const CATEGORY = require('../../models/CATEGORY')

// create new record routes setting
router.get('/new', (req, res) => {
  res.render('new')
})

router.post('/', async (req, res) => {
  try {
    const { name, date, category, amount } = req.body
    const id = await Record.find().lean().then(records => records.length + 1)
    Record.create({ id, name, date, category, amount })
    res.redirect('/')
  } catch (err) {
    console.log(err)
  }
})

// filter by category routes setting
router.get('/filter', (req, res) => {
  const filter = req.query.filter
  if (!filter) {
    return res.redirect('/')
  }
  return Record.find({ category: filter })
    .lean()
    .then(records => {
      let totalAmount = 0
      for (let record of records) {
        switch (record.category) {
          case '家居物業':
            record.icon = CATEGORY.home
            break
          case '交通出行':
            record.icon = CATEGORY.transportation
            break
          case '休閒娛樂':
            record.icon = CATEGORY.entertainment
            break
          case '餐飲食品':
            record.icon = CATEGORY.food
            break
          case '其他':
            record.icon = CATEGORY.other
            break
        }
        record.date = moment(record.date).format('YYYY-MM-DD')
        totalAmount += record.amount
      }
      res.render('index', { records, totalAmount, filter })
    })
    .catch(err => { console.log(err) })
})

// edit record routes setting
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Record.findOne({ id })
    .lean()
    .then(record => {
      record.date = moment(record.date).format('YYYY-MM-DD')
      res.render('edit', { record })
    })
    .catch(err => console.log(err))
})

router.put('/:id', (req, res) => {
  const id = req.params.id
  const { name, date, category, amount } = req.body
  return Record.findOne({ id })
    .then(record => {
      record.name = name
      record.date = date
      record.category = category
      record.amount = amount
      return record.save()
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

// delete record routes setting
router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Record.findOne({ id })
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

// 導出router
module.exports = router