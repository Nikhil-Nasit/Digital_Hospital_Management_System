const fs = require("fs");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const path = require("path");
// const { validationResult } = require('express-validator');
const User = require("../models/patient");
const { v1: uuidv1 } = require("uuid");
const RazorPay = require("razorpay");

exports.uploadDocument = async (req, res, next) => {
  const id = req.body.patient;
  let patient;
  try {
    patient = await User.findOneAndUpdate(
      { _id: id },
      { $push: { documents: { patientDoc: req.file.path } } },
      { upsert: true, new: true }
    ).then((data) => {
      if (data) {
        res.status(201).json({
          data: data,
          status: "201",
        });
      } else {
        console.log("Error");
      }
    });
  } catch (err) {
    console.log("Error !");
  }
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
              patientId: result.id,
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

exports.getDocument = async (req, res, next) => {
  const id = req.params.patientId;
  const props = req.params.props;

  let patient;

  patient = await User.findById({ _id: id }).then((user) => {
    if (!user) {
      res.status(401).json({
        message: "Invalid credentials, could not log you in.",
        status: "401",
      });
    } else {
      let pdfName = user.documents[props].patientDoc.split("-")[1];

      const docName = "document-" + pdfName;
      const docPath = path.join("uploads", "pdfs", docName);
      console.log(docName);
      console.log(docPath);
      fs.readFile(docPath, (err, data) => {
        if (!err) {
          res.setHeader("Content-Type", "application/pdf");
          res.setHeader(
            "Content-Disposition",
            'attachment; filename="' + docName + '"'
          );
          res.send(data);
        }
      });
      // const file = fs.createReadStream(docPath);
      // res.setHeader("Content-Type", "application/pdf");
      // res.setHeader(
      //   "Content-Disposition",
      //   'inline; filename="' + docName + '"'
      // );
      // file.pipe(res);
    }
  });
};

exports.updateInformation = async (req, res, next) => {
  const id = req.params.patientId;
  console.log(id);
  const { firstName, lastName, mobileNumber } = req.body;

  User.updateOne(
    { _id: id },
    {
      $set: {
        firstName: firstName,
        lastName: lastName,
        mobileNumber: mobileNumber,
      },
    },
    { upsert: true }
  )
    .then((user) => {
      res.status(201).json({
        patientDetails: user,
        message: "Data updated successfully",
        status: "201",
      });
    })
    .catch((err) => {
      console.log("Error");
    });
};

exports.getPayment = async (req, res, next) => {
  try {
    const instance = new RazorPay({
      key_id: process.env.RZR_PAY_ID,
      key_secret: process.env.RZR_PAY_SECRET,
    });

    const options = {
      amount: req.body.amount * 100, // amount in the smallest currency unit
      currency: "INR",
      receipt: `${uuidv1()}`,
    };

    return res.status(201).json("Payment Done Successfully!");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};
