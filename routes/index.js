// 載入express & express router
const express = require('express')
const router = express.Router()

// 載入不同router
const home = require('./modules/home')
const records = require('./modules/records')

// 導引routes
router.use('/', home)
router.use('/records', records)

// 導出Router
module.exports = router