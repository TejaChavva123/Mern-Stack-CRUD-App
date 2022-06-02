const express = require("express");
const app = express();

//other things
const bodyparser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

//db connection
mongoose.connect("mongodb+srv://teja_226:YpbuipIn4AV16PEJ@cluster0.m6tcgra.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=>{
    console.log("DB is connected");
})

app.use(bodyparser.json());
app.use(cors());

//routers
app.use('/crudapi',require('./routes/routes'));

app.listen(5000,()=>{
    console.log("Server is up and running")
})
