const express = require("express");
const registrationController = require("../controller/registration.controller");
const registrationStatusController = require("../controller/registrationStatus.controller");
const registrationMiddleware = require("../middleware/registration.middleware");

const router = express.Router();

router.post("/:eventId", registrationController.registerUser);
router.get(
  "/:registrationId",
  registrationMiddleware.getRegistrationById,
  registrationController.getRegistration
);
router.post(
  "/:registrationId/approvals",
  registrationMiddleware.getRegistrationById,
  registrationStatusController.approveRegistration
);
router.post(
  "/:registrationId/rejections",
  registrationMiddleware.getRegistrationById,
  registrationStatusController.rejectRegistration
);

module.exports = router;
