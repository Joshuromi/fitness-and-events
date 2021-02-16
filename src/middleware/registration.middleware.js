const RegistrationModel = require("../models/registration.model");

const registrationMiddleware = {};

registrationMiddleware.getRegistrationById = async (req, res, next) => {
  let registration;
  try {
    registration = await RegistrationModel.findById(req.params.registrationId);
    if (registration == null) {
      return res
        .status(404)
        .json({ message: "Registration for this event does not exist" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.registration = registration;
  next();
};

module.exports = registrationMiddleware;
