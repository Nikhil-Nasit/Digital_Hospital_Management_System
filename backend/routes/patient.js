const express = require("express");
const { check } = require("express-validator");

const router = express.Router();

const patientController = require("../controllers/patient-controllers");

router.post("/login", patientController.postLogin);

router.post(
  "/signup",
//   [check("password").isLength({ min: 5 })],
  patientController.postSingup
);

module.exports = router;
