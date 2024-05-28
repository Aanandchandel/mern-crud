require("dotenv").config()
const bodyParser = require('body-parser');
const cors=require("cors")
const mongoose = require('mongoose');
const express = require('express');
const app =express()
const User=require("./model/user.js")
// Set up middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // Parse incoming JSON requests
app.use(express.json());
//to create user
app.post("/user",async(req,res)=>{
    try{
        const {password,email,name}= req.body
        if(password&&email,name){
            const user= await User.create({password,email,name});
            res.status(200).send({message:JSON.stringify(user)});
        }
    }catch(err){
        res.send({message:err})
    }
})
//to get users
app.get("/getuser",async(req,res)=>{
    try{
        const  users= await User.find()
        res.status(200).json(users)
    }catch(err){
        res.status(404).send({message:err})
    }
})

//to update user 
app.patch("/update", async(req,res)=>{

    try{
        const {password,name,email}=req.body;
        const user=User.findOneAndUpdate({email},{password,name,email});
        res.status(200).send(user);
    }catch(err){
        res.send({message:err})
    }
})
app.delete("/delete",async(req,res)=>{
    try {
        const {email}=req.body
        const user=User.findOneAndDelete({email});
        res.send(user);
    } catch (err) {
        res.send({message:err})
    }
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


app.listen(4000,()=>{
    console.log("server is running on port 4000")
})
