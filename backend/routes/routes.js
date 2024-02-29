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

<<<<<<< HEAD:backend/routes/routes.js

// error handling for 404 requests.
router.use((req, res) => {
  res.status(404).json('404 Not Found');
});

=======
// error handling for 404 requests.

router.use((req, res) => {
  res.status(404).json('404 Not Found');
});
>>>>>>> b7758a31706a0cb74e6130cf1df42db84d777aef:routes/routes.js
module.exports = {router};
