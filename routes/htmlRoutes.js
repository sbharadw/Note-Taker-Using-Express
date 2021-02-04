// => HTML GET Requests
// Below code handles when users "visit" a page.
// In each of the below cases the user is shown an HTML page of content

const path = require('path');

module.exports = (app) => {

app.get('/', (req,res) => {  
res.sendFile(path.join(__dirname, '../public/index.html'));
})

app.get('/notes', (req, res) => {  
res.sendFile(path.join(__dirname, '../public/notes.html'));
})

// If no matching route is found default to home
app.get('*', (req, res) => {
res.sendFile(path.join(__dirname, '../public/index.html'));
});

};