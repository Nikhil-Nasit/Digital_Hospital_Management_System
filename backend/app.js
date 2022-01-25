const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

const authRoutes = require("./routes/auth");
// const erroeRoutes = require('./')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use(authRoutes);

app.get("/", (req, res, next) => {
  res.send("It's Working");
});

mongoose
  .connect("mongodb://localhost:27017/user")
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
