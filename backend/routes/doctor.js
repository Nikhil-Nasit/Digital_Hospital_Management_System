const express = require("express");
const { check } = require("express-validator");

const router = express.Router();

const doctorController = require("../controllers/doctor-controllers");

router.post("/login", doctorController.postLogin);

router.post(
  "/signup",
//   [check("password").isLength({ min: 5 })],
  doctorController.postSingup
);
router.delete("/delete",doctorController.postDelete);

module.exports = router;
