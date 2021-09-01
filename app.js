const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/expense', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error')
})

db.once('open', () => {
  console.log('mongodb connected')
})

app.get('/', (req, res) => {
  res.render('index')
})

app.engine('hbs', exphbs({
  defaultLayout: 'main', extname: '.hbs', helpers: { isEqual: function (a, b) { return a === b }} 
}))
app.set('view engine', 'hbs')

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})