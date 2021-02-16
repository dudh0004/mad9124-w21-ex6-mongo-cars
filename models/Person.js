const mongoose = require('mongoose')
const Car = require('./Car')

const schema = new mongoose.Schema({
    name: {
        first: String,
        last: String
    },
    email: String,
    birthDate: Date,
    phone: Number,
    address: {
        streetNumber: String,
        streetName: String,
        city: String,
        region: String,
        country: String,
        postalCode: String
    },
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'Car'}

})
const Model = mongoose.model('Person', schema)

module.exports = Model