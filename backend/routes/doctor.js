const express = require("express");
// const { check } = require("express-validator");

const router = express.Router();

const doctorController = require("../controllers/doctor-controllers");

router.post("/login", doctorController.postLogin);

router.post("/signup", doctorController.postSingup);

router.delete("/delete", doctorController.postDelete);

router.get("/detail", doctorController.getDoctorDetail);

router.get("/detail/:doctorId", doctorController.getDoctor);

router.get("/searchRecord/:firstname", doctorController.getDoctorByName);

router.put("/update/:doctorId",doctorController.updateInformation);

module.exports = router;
