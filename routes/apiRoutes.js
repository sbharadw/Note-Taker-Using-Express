/*
const fs = require('fs'); 
const notesData = require('../db/db.json')

//const path = require('path');

//const OUTPUT_DIR = path.resolve(__dirname, "../db");
//const outputPath = path.join(OUTPUT_DIR, "db.json");


module.exports = (app) => {
    
app.get('/notes', (req, res) => {

fs.readFile(notesData, (err, data) => {
        
err ? console.err(err) : res.send(data)
        
})     
})

app.post('/notes', (req, res) => {

notesData.push(req.body);
res.json(true);

})

}

*/

const toDo = require('../db/db.json');
const fs = require('fs');
let uniqid = require('uniqid');
let id = uniqid;

module.exports = (app) => {


app.get('/api/notes', (req, res) => res.send(toDo));

app.post('/api/notes', (req, res) => {
    
    let latestNote = {
    "id": id(),
    "title": req.body.title,
    "text": req.body.text
     };

    toDo.push(latestNote);
    
    fs.writeFile('db/db.json', JSON.stringify(toDo), (err) =>
    err ? res.send("Error") :  res.json(latestNote));
  });



  app.delete("/api/notes/:id", (req, res) => {
	const noteDelete = req.params.id;
	for (let i = 0; i < toDo.length; i++) {
		if (toDo[i].id === noteDelete) {
			toDo.splice(i, 1);
		}
	}
	res.json(toDo);

	fs.writeFile('db/db.json', JSON.stringify(toDo), function (err, result) {
		if (err) console.log("error", err);
	});
});
    
};