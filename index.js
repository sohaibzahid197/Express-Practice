const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'student'));

// app.get('/', function(req, res) {
//     res.render('index', { name: 'Sohaib' });});

    app.get('/search', (req, res) => {
        const searchTerm = req.query.q;
        res.send(`You searched for: ${searchTerm}`);
    });

    // Handling GET requests
app.get('/', (req, res) => {
    res.send('This is a GET request');
});

// // Handling POST requests
// app.post('/', (req, res) => {
//     res.send('This is a POST request');
// });

app.get('/old-url', (req, res) => {
    res.redirect('https://www.tutorialspoint.com/getting-query-string-variables-in-express-js');
});
    app.get('/new-url', (req, res) => 
    {
        res.send('This is a new URL');
    });
app.listen(1000,() => 
 {
    console.log('listening on http://localhost:1000');
 });