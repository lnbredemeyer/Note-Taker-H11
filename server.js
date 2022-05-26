const express = require('express');
const fs = require('fs');

// Initializes the app and creates a port
const app = express();
const PORT = process.env.PORT || 3001;

// Sets up body parsing and static folder
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Creates a list of routes for Get, Post, Delete

// Get Route
app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
        if (err) throw err;
        const parsedData = JSON.parse(data);
        res.json(parsedData);
      });
});

// Post Route
app.post('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
        if (err) throw err;
        const parsedData = JSON.parse(data);
        const note = req.body;
        parsedData.push(note);
        fs.writeFile('./db/db.json', JSON.stringify(parsedData), (err) => {
            if (err) throw err;
            res.json(parsedData);
          });
      });
});

// Delete Route

app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));