const router = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

const express = require('express'); //Not sure if these are supposed to be in the routes file or servver file
const app = express(); //Not sure if these are supposed to be in the routes file or servver file

router.get('/', (req, res) => {
  console.info(`${req.method} request received for feedback`);

  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

router.post('/api/notes', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to submit feedback`);
    
    console.log(data)
    // Destructuring assignment for the items in req.body
    const {noteTitle, noteText } = req.body;
  
    // If all the required properties are present
    if (noteTitle && noteText) {
      // Variable for the object we will save
      const newFeedback = {
        noteTitle,
        noteText,
        review_id: uuid(),
      };
  
      readAndAppend(newFeedback, './db/db.json');
      console.log(readAndAppend)
      
      const response = {
        status: 'success',
        body: newFeedback,
      };
  
      res.json(response);
    } else {
      res.json('Error in posting feedback');
    }
  });
  
  module.exports = router;
