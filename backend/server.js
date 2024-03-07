const express = require('express');
const app = express();
const {router} = require('./routes/routes');
const port = process.env.PUBLIC_PORT || 3001;
const { connectDB, mongooseConnect } = require('./db')
const cors=require('cors');
const {consModel} = require("./models/user");

app.use(express.json());
app.use(cors());
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

app.post("/createUser",async(req, res) => {
  try {
    console.log(req.body)
    const user = new consModel(req.body);
    await user.save();
    res.send(user);
  } 
  catch (err) {
    res.status(500).send(err);
    console.log(err);
}});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
app.use(router)
