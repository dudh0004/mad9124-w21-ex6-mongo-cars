const Car = require('../models/Car')
const router = require('express').Router()

router.get('/', async (req, res) => {
    const cars = await Car.find()
    res.send({data: cars})
})

router.post('/', async (req, res) => {})

router.get('/:id', async (req, res) => {})

router.patch('/:id', async (req, res) => {})

router.put('/:id', async (req, res) => {})

router.delete('/:id', async (req, res) => {})

module.exports = router