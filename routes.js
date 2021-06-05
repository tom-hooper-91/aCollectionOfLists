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

router.get('/:id/edit', (req, res) => {
    const id = req.params.id
    lib.getList(id, (viewData) => {
        res.render('editItem', viewData)
    })
})

router.get('/:id/:item', (req, res) => {
    const id = req.params.id
    const item = req.params.item
    lib.getList(id, (viewData) => {
        res.render('Item', viewData.contents[item - 1])
    })
})

// router.post('/:id/:item', (req, res) => {

//     const id = req.params.id
//     const item = Number(req.params.item)
    
//     lib.readParse('/data.json', (viewData) => {
        
//         const target = viewData.list.find(element => element.name == id)

//         const targetItem = target.contents.find(element => element.id === item)

//         console.log(targetItem)

//         targetItem.name = input.name
//         if(targetItem.description) targetItem.description = input.description
//         if(targetItem.quantity) targetItem.quantity = input.quantity

//         console.log(targetItem)

//         const targetString = JSON.stringify(viewData, null, 2)

//         lib.writeRedirect('/data.json', targetString, '/', (newPath) => {
//             res.redirect(__dirname + newPath)
//         })
    //   const target = viewData.puppies.find(element => element.id === id)
      
    //   target.name = input.name
    //   target.breed = input.breed
    //   target.owner = input.owner
    //   target.image = input.image
      
    //   const targetString = JSON.stringify(viewData, null, 2)
      
    //   func.writeRedirect('/data.json', targetString, '/puppies/', (newPath) => {
    //     res.redirect(newPath + id)
    //   })
//     })
//   })

module.exports = router