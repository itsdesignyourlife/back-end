const jwt = require('jsonwebtoken')
const secrets = require('../config/secrets')

module.exports = (req, res, next) => {
    const token = req.headers.authorization
    if(token) {
        jwt.verify(token, secrets.jwtSecret, (error, decodeToken) => {
            if (error) {
                res.status(401).json({ message: 'Invalid credentials.'})
            } else {
                req.user = {
                    username: decodeToken.username,
                    id: decodeToken.id
                }
                next()
            }
        })
    } else {
        res.status(400).json({ message: 'Please provide a token' })
    }
}