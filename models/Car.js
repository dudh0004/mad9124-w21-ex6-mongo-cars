const mongoose = require('mongoose')
const Person = require('./Person')

const schema = new mongoose.Schema({
    make: String,
    model: String,
    colour: String,
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'Person'}
})
const Model = mongoose.model('Car', schema)

module.exports = Model