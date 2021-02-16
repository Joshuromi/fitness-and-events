const express = require("express");
const RegistrationController = require("../controller/registration.controller");

const router = express.Router();

router.post("/:eventId", RegistrationController.registerUser);

module.exports = router;
