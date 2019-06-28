const supertest = require('supertest')
const server = require('../api/server')

describe('Users Router', () => {
    it('should return a 401 because of invalid credentials', () => {
        return supertest(server).get('/api/users').expect(401)
    })
    it('should return JSON', () => {
        return supertest(server).get('/api/users').expect('content-type', /json/i)
    })
})