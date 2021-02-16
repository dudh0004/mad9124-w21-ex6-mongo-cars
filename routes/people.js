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

router.get('/:id', async (req, res) => {
    try {
    const Person = await (await person.findById(req.params.id))
    if (!Person) {
    throw new Error('Resource not found')
    }
    res.send({data: Person})
    } catch (err) {
        sendResourceNotFound(req, res);
    }
})

router.patch('/:id', async (req, res) => {
    const {_id, id, ...otherAttributes} = req.body
    try { 
    const Person = await person.findByIdAndUpdate(
        req.params.id, 
        {_id: req.params.id, ...otherAttributes}, 
        {
            new: true,
            runValidators: true
        }
    )
    if (!Person) {
        throw new Error('Resource not found')
    }
    res.send({data: Person})
    } catch (err) {
        sendResourceNotFound(req, res)
    }
})


function sendResourceNotFound(req, res) {
    res.status(404).send({
        errors: [
            {
                status: '404',
                title: 'Resource does not exist',
                description: `We could not find a car with id: ${req.params.id}`
            }
        ]
    })
}

module.exports = router