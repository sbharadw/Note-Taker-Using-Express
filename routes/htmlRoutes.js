// => HTML GET Requests
// Below code handles when users "visit" a page.
// In each of the below cases the user is shown an HTML page of content

const path = require('path');

module.exports = (app) => {

//For future reference. I already did app.use('/', htmlRoutes) in server.js file
//app.get('/', (req,res) => {  
//res.sendFile(path.join(__dirname, '../public/index.html'));
//})

app.get('/notes', (req, res) => {

res.sendFile(path.join(__dirname, '../public/notes.html'));

});

app.get('*', (req, res) => {

res.sendFile(path.join(__dirname, '../public/index.html'));

});


};
