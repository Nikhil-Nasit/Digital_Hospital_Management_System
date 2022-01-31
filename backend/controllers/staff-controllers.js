const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const { validationResult } = require('express-validator');
const Staff = require("../models/staff");

exports.postLogin = (req, res, next) => {
  const { email, password } = req.body;

  Staff.findOne({ email: email })
    .then((staff) => {
      if (!staff) {
        res.status(401).json({
          message: "Invalid credentials, could not log you in.",
          status: "401",
        });
      } else {
        bcrypt
          .compare(password, staff.password)
          .then((doMatch) => {
            if (doMatch) {
              let token;
              token = jwt.sign({ staffId: staff.id }, "supersecret", {
                expiresIn: "1h",
              });

              res.status(201).json({
                message: "Login Successfully",
                status: "201",
                staffId: staff.id,
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
    address,
    password,
    confirmPassword,
  } = req.body;

  Staff.findOne({ email: email })
    .then((staffDoc) => {
      if (staffDoc) {
        return res.status(422).json({
          message: "Staff exists already, please login instead.",
          status: "422",
        });
      }
      return bcrypt
        .hash(password, 12)
        .then((hashedPassword) => {
          const staff = new Staff({
            firstName: firstName,
            lastName: lastName,
            email: email,
            mobileNumber: mobileNumber,
            address: address,
            password: hashedPassword,
            confirmPassword: hashedPassword,
          });
          return staff.save();
        })
        .then((result) => {
          let token;
          token = jwt.sign({ staffId: result.id }, "supersecret", {
            expiresIn: "1h",
          });
          res.status(201).json({
            message: "Signed up Successfully",
            staffId: result.id,
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
