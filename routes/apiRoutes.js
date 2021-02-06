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
console.log(noteDelete);    
	for (let i = 0; i < toDo.length; i++) {
		if (toDo[i].id === noteDelete) {
            toDo.splice(i, 1);
            i--;
		}
    }
    console.log(toDo);
	res.json(toDo);

	fs.writeFile('db/db.json', JSON.stringify(toDo), function (err, result) {
		if (err) console.log("error", err);
	});
});
    
};