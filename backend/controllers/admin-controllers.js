const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/admin");

exports.postLogin = (req, res, next) => {
  const { email, password } = req.body;

  Admin.findOne({ email: email })
    .then((admin) => {
      if (!admin) {
        res.status(401).json({
          message: "Invalid credentials, could not log you in.",
          status: "401",
        });
      } else if (password == admin.password) {
        let token;
        token = jwt.sign({ adminId: admin.id }, "supersecret", {
          expiresIn: "1h",
        });
        res.status(201).json({
          message: "Login Successfully",
          status: "201",
          adminId: admin.id,
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
};
