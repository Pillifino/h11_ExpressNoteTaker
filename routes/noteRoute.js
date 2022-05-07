const router = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// api/notes
router.get('/', (req, res) => {
  console.info(`${req.method} request received for feedback`);

  readFromFile('./db/db.json', 'utf-8').then((data) => {
    console.log(data)
    res.json(JSON.parse(data))});
});

router.post('/', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to submit feedback`);
    
    
    // Destructuring assignment for the items in req.body
    const {title, text } = req.body;
    console.log(title, text, 21)
    console.log(req.body)
    // If all the required properties are present
    if (title && text) {
      // Variable for the object we will save
      const newFeedback = {
        title,
        text,
        review_id: uuid(),
      };
      console.log(newFeedback)
      readAndAppend(newFeedback, './db/db.json');
      
      
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
