const express = require('express')
const data = require('./data.json')
const router = express.Router()
const fs = require('fs')
const lib = require('./lib.js')

// router.get('', (req, res) => {
//     fs.readFile(__dirname + '/data.json', (err, data) => {
//         if (err) throw err
//         const viewData = JSON.parse(data)
//         res.render('home', viewData)
//     })
// })

router.get('', (req, res) => {
    lib.readParse('/data.json', (viewData) => {
        res.render('home', viewData)
    })
})

module.exports = router