const express = require('express')
const server = express()

server.use(express.json())

server.get('/', (req, res) => {
    res.json('DYL example GET')
})

module.exports = server;