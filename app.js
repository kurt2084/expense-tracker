const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/expense', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error')
})

db.once('open'm () => {
  console.log('mongodb connected')
})

app.get('/', (req, res) => {
  res.send('Hello')
})

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})