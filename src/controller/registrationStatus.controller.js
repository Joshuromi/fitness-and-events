const registrationStatusController = {};

//======== Approve registration =======================
registrationStatusController.approveRegistration = async (req, res) => {
  const registration = res.registration;
  try {
    registration.approved = true;
    await registration.save();
    res.status(200).json(registration);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//============= Reject registration ============================
registrationStatusController.rejectRegistration = async (req, res) => {
  const registration = res.registration;
  try {
    registration.approved = false;
    await registration.save();
    res.status(200).json(registration);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = registrationStatusController;
