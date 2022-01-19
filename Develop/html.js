//imports
const html = require("express").Router()
const path = require('path')
//for notes
html.get('/notes', (req, res) => {
    res.sendFile(path.join(_dirname, '../public/notes.html'))
})
//index
html.get('*', (req,res) => {
    res.sendFile(path.join(_dirname, '../public/index.html'))
})

module.exports = html;
