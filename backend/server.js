require("dotenv").config()
const bodyParser = require('body-parser');
const cors=require("cors")
const mongoose = require('mongoose');
const express = require('express');
const app =express()

// Set up middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // Parse incoming JSON requests
app.use(express.json());



app.listen(4000,()=>{
    console.log("s")
})


// Connect to MongoDB database
const DB_URL = process.env.DB_URL ;
mongoose.connect(DB_URL)
.then(() => {
  console.log('Connected to DB');
})
.catch((err) => {
  console.error('Error connecting to DB:', err);
});
