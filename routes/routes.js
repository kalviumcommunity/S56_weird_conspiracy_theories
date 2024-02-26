const express = require('express');
const router = express.Router();


router.get('/get', (req, res) => {  
  res.json('GET request');
});

router.post('/post', (req, res) => { 
  res.json('POST request');
});

router.put('/put', (req, res) => {
  res.json('PUT request');
});

router.delete('/delete', (req, res) => { 
  res.json('DELETE request');
});

// error handling for 404 requests.

router.use((req, res) => {
  res.status(404).json('404 Not Found');
});
module.exports = {router};
