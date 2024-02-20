const express = require('express');
const app = express();
const port = 3000;

app.get('/ping', (req, res) => {
  res.send('helllooo worlddd!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
