const fs = require('fs')

function readParse(path, callback) {
  fs.readFile(__dirname + path, 'utf-8', (err, data) => {
    if (err) return res.status(500).send(err.message)
    const viewData = JSON.parse(data)
    callback (viewData)
  })
}

function getList(name, callback) {
    fs.readFile(__dirname + '/data.json', 'utf-8', (err, data) => {
        if (err) return res.status(500).send(err.message)
        const viewData = JSON.parse(data)
        const list = viewData.list.find(element => element.name === name)
        callback(list)
    })
}

module.exports = {
    readParse,
    getList
}