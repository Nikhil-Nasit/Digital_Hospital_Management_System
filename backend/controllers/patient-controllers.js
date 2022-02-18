const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const path = require("path");
// const { validationResult } = require('express-validator');
const User = require("../models/patient");

exports.uploadDocument = async (req, res, next) => {
  const id = req.params.patientId;
  console.log(id);
  let patient;
  try {
    patient = await User.findOneAndUpdate(
      { _id: id },
      { $set: { document: req.file.path } },
      { upsert: true, new: true }
    ).then((data) => {
      if (data) {
        // const patientDetails : data;
        // res.json({patient:data});
        res.status(201).json({
          status: "201",
        });
      } else {
        console.log("Error");
      }
    });
  } catch (err) {
    console.log("Error !");
  }
  // console.log(patient);
  // res.json({patient:patient});

  // res.json({ patient: patientDetails });
};

exports.findPatient = (req, res, next) => {
  const { id } = req.body;

  User.findById({ _id: id })
    .then((user) => {
      if (!user) {
        res.status(401).json({
          message: "Invalid credentials, could not log you in.",
          status: "401",
        });
      } else {
        res.status(201).json({
          message: "Correct PatinetID",
          status: "201",
          patientId: user.id,
        });
        // console.log(user);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getPatient = async (req, res, next) => {
  const id = req.params.patientId;
  let patient;
  try {
    patient = await User.findById({ _id: id }, "-password");
  } catch (err) {
    console.log(err);
  }
  res.json({ patient: patient });
};

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
                patientId: user.id,
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
      if (confirmPassword == password) {
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
      } else {
        return res.json({
          message: "Password and Confirm Password must be same",
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
