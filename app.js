// 載入express
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

// 載入routes
const routes = require('./routes')

// 載入mongoose setting 
require('./config/mongoose')

// 載入express-handlebars
const exphbs = require('express-handlebars')

// 載入method-override
const methodOverride = require('method-override')

// setting template engine
app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  // express-handlebars helpers setting
  helpers: {
    isEqual: function (a, b) { return a === b }
  }
}))
app.set('view engine', 'hbs')

// setting body-parser
app.use(express.urlencoded({ extended: true }))

// setting method-override
app.use(methodOverride('_method'))

// routes setting
app.use(routes)

// start the express server and listening for connection
app.listen(PORT, () => {
  console.log(`This Express is running on http://localhost:${PORT}`)
})