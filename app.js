// import express and set port
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

// import routes
const routes = require('./routes')

// import mongoose
require('./config/mongoose')

// import express-handlebars
const exphbs = require('express-handlebars')

// import method-override
const methodOverride = require('method-override')

// set template engine
app.engine('hbs', exphbs({
  defaultLayout: 'main', 
  extname: '.hbs', 
  helpers: { isEqual: function (a, b) { return a === b }}
})) 
app.set('view engine', 'hbs')

// set body-parser
app.use(express.urlencoded({ extended: true }))

// set method-override
app.use(methodOverride('_method'))

// set route
app.use(routes)

// listen to connection
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})