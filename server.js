const express=require('express');
const path=require('path');
const cors=require('cors');
var bodyParser = require('body-parser')
var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const port= process.env.port || 3000;
const host= process.env.BASE_URL || "http://localhost:3000";
app.use(express.static(path.join(__dirname,"public")));
app.use('/',express.static(path.join(__dirname,"public")));


const Task=require('./routers/Task');
const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/dbmeans",{useNewUrlParser:true},err =>{

    console.log("Connection successfull")
});



app.use('/api/Task',Task);


app.listen(port,() => {
    console.log('App is Running on port ${host}'+host);
})