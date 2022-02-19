const express = require("express");
const { check } = require("express-validator");

const router = express.Router();
const {uploadFile} = require("../middleware/file-upload");

const patientController = require("../controllers/patient-controllers");

router.post("/login", patientController.postLogin);

router.post("/signup", patientController.postSingup);

router.get("/detail/:patientId", patientController.getPatient);

router.post("/find/patient", patientController.findPatient);

router.post(
  "/upload/document",
  uploadFile,
  patientController.uploadDocument
);
module.exports = router;
