const express = require("express");
const router = express.Router();
const { uploadFile } = require("../middleware/file-upload");
const patientController = require("../controllers/patient-controllers");

router.post("/login", patientController.postLogin);

router.post("/signup", patientController.postSingup);

router.get("/detail/:patientId", patientController.getPatient);

router.get("/documents/:patientId/:props", patientController.getDocument);

router.post("/find/patient", patientController.findPatient);

router.post("/upload/document", uploadFile, patientController.uploadDocument);

router.put("/update/:patientId", patientController.updateInformation);

router.post("/payment", patientController.getPayment);

module.exports = router;
