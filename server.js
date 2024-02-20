const express = require('express');
const app = express();
const port = process.env.PUBLIC_PORT || 3001;

app.get('/ping', (req, res) => {
  res.send('helllooo worlddd!');
});

app.use((req, res) => {
  res.status(404).send("Route Not FOund!!!");
});

app.get('/', (req, res) => {
  res.send('welcome to my new server!');
});
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
