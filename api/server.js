const express = require('express')
const server = express()
const cors = require('cors')

server.use(express.json())
server.use(cors())

const authRouter = require('../auth/auth-router')
const usersRouter = require('../users/users-router.js')
const postsRouter = require('../posts/posts-router')

server.use('/api/auth', authRouter)
server.use('/api/users', usersRouter)
server.use('/api/posts', postsRouter)

server.get('/', (req, res) => {
    res.json('Lambda School Build Week - June 24-28 - Design Your Life')
})

module.exports = server;