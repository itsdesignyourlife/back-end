const express = require('express')

const router = express.Router()
const users = require('./users-model')
const restricted = require('../auth/restricted')

router.get('/', restricted, (req, res) => {
    users.find().then(users => {
        res.status(200).json(users)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;