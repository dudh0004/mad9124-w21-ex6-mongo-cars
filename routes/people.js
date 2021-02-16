const person = require('../models/Person')
const router = require('express').Router()

router.get('/', async (req, res) => {
    const people = await person.find()
    res.send({data: people})
})

module.exports = router