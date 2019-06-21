const express = require('express')
const server = express()

server.use(express.json())

const authRouter = require('../auth/auth-router')
const usersRouter = require('../users/users-router.js')

server.use('/api/auth', authRouter)
server.use('/api/users', usersRouter)

server.get('/', (req, res) => {
    res.json('DYL example GET')
})

module.exports = server;