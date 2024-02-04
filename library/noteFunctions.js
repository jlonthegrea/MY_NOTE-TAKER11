const fs = require("fs");
const path = require("path");

function createNote(body, notesArray) {
    const note = body;
    notesArray.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: notesArray
        }, null,2)
    )
    return note;
}

function deleteNote(id, notesArray) {
    notesArray.splice(0, notesArray.length, ...notesArray.filter(function(note) {
        return note.id !== id;
    }))
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: notesArray
        }, null,2)
    )
}

module.exports = {
    createNote,
    deleteNote
};