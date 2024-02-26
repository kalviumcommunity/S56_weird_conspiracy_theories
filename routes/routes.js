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
module.exports = {router};
