const RegistrationModel = require("../models/registration.model");

const registrationController = {};

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

registrationController.getUserRegistration = async (req, res) => {
  const { registrationId } = req.params;
  try {
    const registration = await RegistrationModel.findById(registrationId);
    if (registration) {
      res.status(200).json(registration);
    } else {
      return res
        .status(404)
        .json({ message: "Registration id does not exist!" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = registrationController;
