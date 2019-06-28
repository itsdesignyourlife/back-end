const server = require('../api/server')
const supertest = require('supertest')

describe('Time Router', () => {
    describe('GET /', () => {
        it('returns a 200 status code', () => {
            return supertest(server).get('/api/time/').expect(200)
        })
        it('returns JSON', () => {
            return supertest(server).get('/api/time').expect('content-type', /json/i)
        })
    })
    describe('PUT /', () => {

        it('returns JSON', () => {
            return supertest(server).put('/api/time/:id').expect('content-type', /json/i)
        })
    })

})