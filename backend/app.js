const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

const authRoutes = require('./routes/auth');
// const erroeRoutes = require('./')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(authRoutes);

app.get('/',(req,res,next) => {
    res.send("It's Working");
})

mongoose.connect('mongodb://localhost:27017/user').then(()=>{
    app.listen(3000);
}).catch(err =>{
    console.log(err);
})

