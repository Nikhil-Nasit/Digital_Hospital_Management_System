const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const { validationResult } = require('express-validator');
const Doctor = require("../models/doctor");

exports.getDoctor = async (req, res, next) => {
  const id = req.params.doctorId;
  let doctor;
  try {
    doctor = await Doctor.findById({ _id: id }, "-password");
  } catch (err) {
    console.log(err);
  }
  res.json({ doctor: doctor });
};

exports.getDoctorDetail = async (req, res, next) => {
  let doctor;
  try {
    doctor = await Doctor.find({});
  } catch (err) {
    console.log(err);
  }

  res.json({ doctor: doctor });
};

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
                doctorId: doctor._id,
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
      if (confirmPassword == password) {
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

exports.postDelete = (req, res, next) => {
  const { id } = req.body;

  Doctor.findByIdAndDelete({ _id: id })
    .then((DoctorDoc) => {
      if (DoctorDoc) {
        return res.status(200).json({
          message: "Doctor deleted",
          status: "200",
        });
      } else {
        return res.status(404).json({
          message: "Doctor does not exist",
          status: "404",
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getDoctorByName = (req, res, next) => {
  const firstName = req.params.firstname;
  console.log(firstName);

  Doctor.find({ firstName: { $regex: firstName } }).then((doctor) => {
    if (doctor) {
      console.log(doctor);
      return res.status(201).json({ doctor: doctor });
    } else {
      return res.status(404).json({
        message: "No such Doctor",
        status: "404",
      });
    }
  });
};

exports.updateInformation = async (req, res, next) => {
  const id = req.params.doctorId;
  console.log(id);
  const { firstName, lastName, mobileNumber, address } = req.body;

  Doctor.updateOne(
    { _id: id },
    {
      $set: {
        firstName: firstName,
        lastName: lastName,
        mobileNumber: mobileNumber,
        address: address,
      },
    },
    { upsert: true }
  )
    .then((doctor) => {
      console.log(doctor);
      res.status(201).json({
        doctorDetails: doctor,
        message: "Data updated successfully",
        status: "201",
      });
    })
    .catch((err) => {
      console.log("Error");
    });
};
