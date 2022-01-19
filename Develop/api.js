//imports
const api = require('express').Router()
const notes = require('../Develop/public/assets/js/index')

//returns the notes file as json
api.get('/notes', (req,res)=>{
    notes.getNotes().then((notes) => {return res.json(notes)})
    .catch((err) => res.status(500).json(err))
})

