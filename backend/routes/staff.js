const express = require("express");
// const { check } = require("express-validator");
const router = express.Router();
const staffController = require("../controllers/staff-controllers");

router.post("/login", staffController.postLogin);

router.post("/signup", staffController.postSingup);

router.delete("/delete", staffController.postDelete);

router.get("/detail/:staffId", staffController.getStaff);

router.put("/update/:staffId", staffController.updateInformation);

module.exports = router;
