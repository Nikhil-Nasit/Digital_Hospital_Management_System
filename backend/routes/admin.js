const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin-controllers');

router.post("/login", adminController.postLogin);

module.exports = router;