// 載入express & express router
const express = require('express')
const router = express.Router()

// 載入Record model
const Record = require('../../models/Record')

// 載入category icon
const CATEGORY = require('../../models/CATEGORY')

// 載入moment(轉換date format)
const moment = require('moment')

// home page routes setting
router.get('/', (req, res) => {
  Record.find()
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
      res.render('index', { records, totalAmount })
    })
    .catch(err => { console.log(err) })
})

// 導出router
module.exports = router