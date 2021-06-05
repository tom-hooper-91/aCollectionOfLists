const express = require('express')
const data = require('./data.json')
const router = express.Router()
const fs = require('fs')
const lib = require('./lib.js')

router.get('', (req, res) => {
    lib.readParse('/data.json', (viewData) => {
        res.render('home', viewData)
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    lib.getList(id, (viewData) => {
        res.render('list', viewData)
    })
  })

module.exports = router