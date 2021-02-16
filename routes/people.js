const person = require('../models/Person')
const router = require('express').Router()

router.get('/', async (req, res) => {
    const people = await person.find()
    res.send({data: people})
})

router.post('/', async (req, res) => {
    let attributes = req.body
    delete attributes._id

    const newPerson = new person(attributes)
    await newPerson.save()

    res.status(201).send({data: newPerson})
})

module.exports = router