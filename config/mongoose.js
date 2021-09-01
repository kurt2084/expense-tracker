// 載入mongoose
const mongoose = require('mongoose')
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/expense-tracker'

// 與database連線
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

// return mongoose connect info
const db = mongoose.connection

db.on('error', () => {
  console.log('mongoose error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

module.exports = db