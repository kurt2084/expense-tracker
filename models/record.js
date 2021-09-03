// import mongoose
const mongoose = require('mongoose')
// set db schema var 
const Schema = mongoose.Schema
// set recordschema data type
const recordSchema = new Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  }
})
// export recordschema 
module.exports = mongoose.model('Record', recordSchema)