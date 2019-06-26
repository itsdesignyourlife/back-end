const server = require('../api/server')
const supertest = require('supertest')


 describe('Server', () => {
    describe('GET /', () => {
        it('should respond with a 200 status code', () => {
            return supertest(server).get('/').expect(200)
        })
        it('should return JSON', () => {
            return supertest(server).get('/').expect('Content-type', /json/i)
        })
    })
 })
