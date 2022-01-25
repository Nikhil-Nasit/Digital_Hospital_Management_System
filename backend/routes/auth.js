const express = require("express");
const { check } = require("express-validator");

const router = express.Router();

const authController = require("../controllers/auth");

router.post("/login", authController.postLogin);

router.post(
  "/signup",
//   [check("password").isLength({ min: 5 })],
  authController.postSingup
);

module.exports = router;
