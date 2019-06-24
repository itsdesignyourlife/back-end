const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const users = require('../users/users-model')
const secrets = require('../config/secrets')

const router = express.Router()

router.post('/register', (req, res) => {
    let user = req.body
    const hash = bcrypt.hashSync(user.password, 12)
    user.password = hash
    users.add(user).then(user => {
        const token = generateToken(user)
        res.status(201).json({ user, token })
    })
    .catch(err => {
        res.status(500).json(err)
    })
})
router.get('/register', (req, res) => {
    users.find().then(users => {
        res.status(200).json(users)
    })
})

router.post('/login', (req, res) => {
    let { username, password } = req.body
    users.findBy({ username })
    .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user)
            res.status(200)
            .json({ message: `Welcome ${user.username}! Have a token!`, token})
        } else {
            res.status(401).json({ message: `Invalid Credentials`})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username
    }
    const options = {
        expiresIn: '12h'
    }
    return jwt.sign(payload, secrets.jwtSecret, options)
}

module.exports = router;