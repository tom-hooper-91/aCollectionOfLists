const request = require('supertest')
const cheerio = require('cheerio')

const server = require('./server')

test('test suite is working', () => {
    expect(true).toBeTruthy()
})

test('/ renders correctly', (done) => {
    expect.assertions(2)
    const expected = 'collection of Lists'
  
    request(server)
    .get('/')
    .end((err, response) => {
      expect(err).toBeNull()
      const actual = response.text
      expect(actual).toContain(expected)
      done()
    })
  })

  test('/To-Do renders correctly', (done) => {
    expect.assertions(3)
    const expected = 'To-Do'

    request(server)
    .get('/To-Do')
    .end((err, response) => {
      expect(err).toBeNull()
      const actual = response.text
      const $ = cheerio.load(actual)
      expect(actual).toContain(expected)
      expect($('li').text()).toMatch('rubbish out on sunday ')
      done()
    })
  })

    test('/Shopping renders correctly', (done) => {
      expect.assertions(3)
      const expected = 'Shopping'
  
      request(server)
      .get('/Shopping')
      .end((err, response) => {
        expect(err).toBeNull()
        const actual = response.text
        const $ = cheerio.load(actual)
        expect($('li').text()).toMatch('bin bags')
        expect(actual).toContain(expected)
        done()
      })
  })