const express = require("express");
const userController = require("../controller/user.controller");
const getUserById = require("../middleware/getUserById.middleware");

const router = express.Router();

router.post("/register", userController.registerUser);
router.get("/:userId", getUserById, userController.getUser);

module.exports = router;
