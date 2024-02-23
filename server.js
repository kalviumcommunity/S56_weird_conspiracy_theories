const express = require('express');
const app = express();
const port = process.env.PUBLIC_PORT || 3001;
const { connectDB, mongooseConnect } = require('./db')
connectDB()


app.get('/', async (req, res) => {
  try {
    const connectionStatus = await mongooseConnect();
    if (connectionStatus) {
      res.send('Connected to mongoDB!');
    }
  } 
  catch (err) {
    res.status(500).send('Failed to connect to mongoDB!');
  }
});

app.get('/ping', (req, res) => {
  res.send('helllooo worlddd(ping route)!');
});

app.use((req, res, next) => {
  res.status(404).send('Route Not Found!!');
});
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
