const express = require("express");
const { check } = require("express-validator");

const router = express.Router();

const staffController = require("../controllers/staff-controllers");

router.post("/login", staffController.postLogin);

router.post(
  "/signup",
//   [check("password").isLength({ min: 5 })],
  staffController.postSingup
);

module.exports = router;
