const express = require("express");
const { check } = require("express-validator");

const router = express.Router();

const doctorController = require("../controllers/doctor-controllers");

router.post("/login", doctorController.postLogin);

router.post("/signup", doctorController.postSingup);

router.delete("/delete", doctorController.postDelete);

router.get("/detail/:doctorId", doctorController.getDoctor);

module.exports = router;
