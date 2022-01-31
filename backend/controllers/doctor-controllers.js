const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const { validationResult } = require('express-validator');
const Doctor = require("../models/doctor");

exports.postLogin = (req, res, next) => {
  const { email, password } = req.body;

  Doctor.findOne({ email: email })
    .then((doctor) => {
      if (!doctor) {
        res.status(401).json({
          message: "Invalid credentials, could not log you in.",
          status: "401",
        });
      } else {
        bcrypt
          .compare(password, doctor.password)
          .then((doMatch) => {
            if (doMatch) {
              let token;
              token = jwt.sign({ doctorId: doctor.id }, "supersecret", {
                expiresIn: "1h",
              });

              res.status(201).json({
                message: "Login Successfully",
                status: "201",
                doctorId: doctor.id,
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
    specialization,
    password,
    confirmPassword,
  } = req.body;

  Doctor.findOne({ email: email })
    .then((doctorDoc) => {
      if (doctorDoc) {
        return res.status(422).json({
          message: "Doctor exists already, please login instead.",
          status: "422",
        });
      }
      return bcrypt
        .hash(password, 12)
        .then((hashedPassword) => {
          const doctor = new Doctor({
            firstName: firstName,
            lastName: lastName,
            email: email,
            mobileNumber: mobileNumber,
            address: address,
            specialization: specialization,
            password: hashedPassword,
            confirmPassword: hashedPassword,
          });
          return doctor.save();
        })
        .then((result) => {
          let token;
          token = jwt.sign({ doctorId: result.id }, "supersecret", {
            expiresIn: "1h",
          });
          res.status(201).json({
            message: "Signed up Successfully",
            doctorId: result.id,
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
