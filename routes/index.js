// import express
const express = require('express')
// set  router var for express Router func
const router = express.Router()
// import home
const home = require('./modules/home')
// import records
const records = require('./modules/records')

// use home route
router.use('/', home)
// use records route
router.use('/records', records)

// export router
module.exports = router