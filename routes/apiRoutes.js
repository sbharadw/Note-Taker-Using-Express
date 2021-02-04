const fs = require('fs'); 
const path = require('path');
/*
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
*/

module.exports = (app) => {

fs.readFile('../db/db.json', 'utf8', (err, data) => {

err ? console.error(err) : console.log(data);

const notes = data;

return notes;

})

app.get('/api/notes', (req, res) => {

res.json(notes);

})


app.post('/api/notes', (req, res) => {

const addNote = req.body;

notes.push(addNote);

res.end()

})


}