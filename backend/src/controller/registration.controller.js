const RegistrationModel = require("../models/registration.model");

const registrationController = {};

//============Register a User =================================
registrationController.registerUser = async (req, res) => {
  const { user_id } = req.headers;
  const { eventId } = req.params;
  const { date } = req.body;

  try {
    const registration = new RegistrationModel({
      user: user_id,
      event: eventId,
      date,
    });

    await registration
      .populate("user", "-password")
      .populate("event")
      .execPopulate();

    await registration.save();

    res.status(200).json(registration);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

//=============Get a user Registration=====================
registrationController.getRegistration = async (req, res) => {
  res.status(200).json(res.registration);
};

module.exports = registrationController;
