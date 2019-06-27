const express = require("express");

const router = express.Router();
const cycle = require('../cycle/cycle-model')

router.get('/', restricted, (req, res) => {
    cycle.find().then(cycle => {
        res.status(200).json(cycle)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/:id', restricted, (req, res) => {
    cycle.findById(req.params.id).then(cycle => {
        res.status(200).json(cycle)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.put('/:id', restricted, (req, res) => {
    const id = req.params.id
    cycle.update(id, req.body).then(cycle => {
        res.status(200).json(cycle)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;