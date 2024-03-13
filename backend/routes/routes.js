const express = require('express');
const router = express.Router();
const { validateEntry } = require("../validator.js")
const jwt = require('jsonwebtoken');
require("dotenv").config()


const { consModel } = require('../models/user.js');
router.get('/get', (req, res) => {  
  res.json('GET request');
});



router.get('/getuser', async(req, res) => {
  let result = await consModel.find({});
  res.send(result)
 
});
// post
router.post("/createUser", async (req, res) => {
  try {
    // adding validation
    const { error } = validateEntry(req.body);
    if (error) {
      return res.status(400).send(error.details);
    }else{
      console.log(req.body);
      const user = new consModel(req.body);
      await user.save();
      res.send(user);
    }
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
});

// auth post req
router.post('/auth', (req, res) => {
  let {username}=req.body;
  console.log(username);
  let token=jwt.sign({user:username.username},process.env.secretKey);
  console.log(token);
  res.send(token);
});

// get data by id
router.get("/getdata/:id", async (req, res) => {
  try {
    const id = req.params.id;
  let result = await consModel.findById({_id:id})
  res.json(result);
  } catch (error) {
    res.json(error)
  }
  
   
});

// update
router.put("/updatedata/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedDoc = await consModel.findByIdAndUpdate(id, {
      conspiracy_theory: req.body.conspiracy_theory,
      description: req.body.description,
      source: req.body.source,
      reference_images: req.body.reference_images,
    });
    res.json(updatedDoc);
  } catch (error) {
    res.status(500).json(error);
  }
});

// delete
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await consModel.findByIdAndDelete({_id:id});
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

// error handling for 404 requests.


router.use((req, res) => {
  res.status(404).json('404 Not Found');
});

module.exports = {router};
