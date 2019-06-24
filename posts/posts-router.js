const express = require('express')

const router = express.Router()
const posts = require('./posts-model')
const restricted = require('../auth/restricted')

router.get('/', restricted, (req, res) => {
    posts.find().then(posts => {
        res.status(200).json(posts)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;