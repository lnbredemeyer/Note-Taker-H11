const express = require('express');

// Initializes the app and creates a port
const app = express();
const PORT = process.env.PORT || 3001;

// Sets up body parsing and static folder
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// requires the api & html routs

require('./routes/apiroutes')(app);
require('./routes/htmlroutes')(app);

app.listen(PORT, function() {
    console.log(`Listening on Port: ${PORT}`);
});