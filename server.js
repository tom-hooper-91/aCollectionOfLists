const express = require('express')
const hbs = require('express-handlebars')
// const routes = require('/routes.js')
const fs = require('fs')

const server = express()

// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

server.get('/', (req, res) => {
    res.send('<h1>TEST</h1>')
})

module.exports = server