const express = require("express");
const multer = require("multer");
const eventController = require("../controller/event.controller");
const uploadConfig = require("../../config/upload.config");

const router = express.Router();
const uploader = multer(uploadConfig);

router.post("/new", uploader.single("thumbnail"), eventController.createEvent);
router.get("/", eventController.getAllEvents);
router.get("/:eventId", eventController.getEventById);
router.delete("/:eventId", eventController.deleteEvent);
router.get("/sports/:sport", eventController.getAllEvents);

module.exports = router;
