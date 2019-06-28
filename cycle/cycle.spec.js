const server = require('../api/server')
const supertest = require('supertest')

describe('Cycle Router', () => {
    describe('GET /', () => {
        it('returns a 200 status code', () => {
            return supertest(server).get('/api/cycle/').expect(200)
        })
        it('returns JSON', () => {
            return supertest(server).get('/api/cycle').expect('content-type', /json/i)
        })
    })
    describe('PUT /', () => {

        it('returns JSON', () => {
            return supertest(server).put('/api/cycle/:id').expect('content-type', /json/i)
        })
    })

})