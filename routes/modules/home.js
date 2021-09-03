// import express
const express = require('express')
// set  router var for express Router func
const router = express.Router()
// import record
const Record = require('../../models/record')
// import category icon
const Category = require('../../models/category')
// import moment(date format func)
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
            record.icon = Category.home
            break
          case '交通出行':
            record.icon = Category.transportation
            break
          case '休閒娛樂':
            record.icon = Category.entertainment
            break
          case '餐飲食品':
            record.icon = Category.food
            break
          case '其他':
            record.icon = Category.other
            break
        }
        record.date = moment(record.date).format('YYYY-MM-DD')
        totalAmount += record.amount
      }
      res.render('index', { records, totalAmount })
    })
    .catch(err => { console.log(err) })
})
// export router
module.exports = router