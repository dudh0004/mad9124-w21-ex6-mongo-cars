const mongoose = require('mongoose')

const schema = new mongoose.Schema.Types({
    make: String,
    model: String,
    colour: String
})
const Model = mongoose.model('Car', schema)

module.exports = Model