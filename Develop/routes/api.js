//imports
const api = require('express').Router()
const notes = require('../public/assets/js/index')

//returns the notes file as json
api.get('/notes', (req,res)=>{
    notes.getNotes().then((notes) => {return res.json(notes)})
    .catch((err) => res.status(500).json(err))
})

//delete
api.delete('/notes/:id', (req,res)=>{
    notes.deleteNote(req.params.id)
    .then(()=>{
        res.json({ok:true})

    }).catch((err) => {
        if(err){
            res.status('500').json(`The error is ${err}`)
        }
    })
})

