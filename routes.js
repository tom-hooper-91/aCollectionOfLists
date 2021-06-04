const express = require('express')
const data = require('./data.json')
const router = express.Router()
const fs = require('fs')

router.get('', (req, res) => {
    fs.readFile(__dirname + '/data.json', (err,data) => {
        if (err) throw err
        res.render('home', data)
    })
})

module.exports = router