// Require FS
const fs = require('fs');

// Creates a list of routes for Get, Post, Delete
module.exports = function(app) {
// Get Route
app.get('/api/notes', function(req, res) {
    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
        if (err) throw err;
        const pData = JSON.parse(data);
        res.json(pData);
      });
});

// Post Route
app.post('/api/notes', function(req, res) {
    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
        if (err) throw err;
        const pData = JSON.parse(data);
        const note = req.body;
        pData.push(note);
        fs.writeFile('./db/db.json', JSON.stringify(pData), (err) => {
            if (err) throw err;
            res.json(pData);
          });
      });
});

// Delete Route

app.delete('/api/notes/:id', function(req, res) {
    const deleteNote = req.params.id;
    console.log(deleteNote);

    fs.readFile('./db/db.json', (err, data) => {
      if (err) throw err;

      const dbData = JSON.parse(data);
      for (let i = 0; i < dbData.length; i++) {
        if (dbData[i].id === Number(deleteNote)) {
          dbData.splice([i], 1);
        }
      }
      console.log(dbData);
      stringData = JSON.stringify(dbData);

      fs.writeFile('./db/db.json', stringData, (err, data) => {
        if (err) throw err;
      });
    });
    res.status(204).send();
  });
}