const express = require("express");
const dashboardController = require("../controller/dashboard.controller");

const router = express.Router();

router.get("/", dashboardController.getAllEvents);
router.get("/sports/:sport", dashboardController.getAllEvents);

module.exports = router;
