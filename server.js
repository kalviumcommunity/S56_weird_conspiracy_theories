const express = require('express');
const app = express();
const port = process.env.PUBLIC_PORT || 3001;

app.get('/', (req, res) => {
  res.send('welcome to my new server!');
});
app.get('/ping', (req, res) => {
  res.send('helllooo worlddd!');
});

app.use((err, req, res, next) => {
  res.status(404).send('Route Not FOund!!');
});




app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
