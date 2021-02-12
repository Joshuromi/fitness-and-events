const express = require("express");
const router = express.Router();
const eventController = require("../controller/event.controller");

router.post("/new", eventController.createEvent);

module.exports = router;
