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

    // const id = Number(req.params.id)
    // lib.getPuppyById(id, (err, puppyDetails) => {
    //   if (err) {
    //     return res.status(500).send(err.message)
    //   }
    //   res.render('edit', puppyDetails)
    // })
  })

module.exports = router