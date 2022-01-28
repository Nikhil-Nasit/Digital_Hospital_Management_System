const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const { validationResult } = require('express-validator');
const User = require("../models/user");

exports.postLogin = (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        res.status(401).json({
          message: "Invalid credentials, could not log you in.",
          status: "401",
        });
      } else {
        bcrypt
          .compare(password, user.password)
          .then((doMatch) => {
            if (doMatch) {
              let token;
              token = jwt.sign({ userId: user.id }, "supersecret", {
                expiresIn: "1h",
              });

              res.status(201).json({
                message: "Login Successfully",
                status: "201",
                userId: user.id,
                token: token,
              });
              // console.log(user);
            } else {
              res.status(401).json({
                message: "Invalid credentials, could not log you in.",
                status: "401",
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postSingup = (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    mobileNumber,
    password,
    confirmPassword,
  } = req.body;

  User.findOne({ email: email })
    .then((userDoc) => {
      if (userDoc) {
        return res.status(422).json({
          message: "User exists already, please login instead.",
          status: "422",
        });
      }
      return bcrypt
        .hash(password, 12)
        .then((hashedPassword) => {
          const user = new User({
            firstName: firstName,
            lastName: lastName,
            email: email,
            mobileNumber: mobileNumber,
            password: hashedPassword,
            confirmPassword: hashedPassword,
          });
          return user.save();
          
        })
        .then((result) => {
          let token;
          token = jwt.sign({ userId: result.id }, "supersecret", {
            expiresIn: "1h",
          });
          res.status(201).json({
            message: "Signed up Successfully",
            userId: result.id,
            token: token,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};
