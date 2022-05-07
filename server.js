// Imported Files
const express = require('express'); //Not sure if these are supposed to be in the routes file or servver file
const path = require('path')
const api = require('./routes/index.js') //THIS BREAKS THE ROUTES FOR SOME REASON

const PORT = process.env.PORT || 2001;

const app = express(); //Not sure if these are supposed to be in the routes file or servver file

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api); //THIS BREAKS THE ROUTES FOR SOME REASON

app.use(express.static('public'));

//Get Route for notes html page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

//Get Route for Note Taker Landing Page
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);