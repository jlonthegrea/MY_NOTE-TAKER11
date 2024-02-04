const router = require("express").Router();
const {
    notes
} = require('../../db/db.json');
const {
    createNote, deleteNote
} = require('../../library/noteFunctions');

router.get('/notes', (req, res) => {
    let saved = notes;
    res.json(saved);
})

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let note = createNote(req.body, notes);
    res.json(note);
})

router.delete('/notes/:id', (req, res) => {
    deleteNote(req.params.id, notes);
    res.json(1);
})

module.exports = router;