const express = require('express');
const router = express.Router();
const { consModel } = require('../models/user.js');
router.get('/get', (req, res) => {  
  res.json('GET request');
});

router.post('/post', (req, res) => { 
  res.json('POST request');
});

router.get('/getuser', async(req, res) => {
  let result = await consModel.find({});
  res.send(result)
 
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
