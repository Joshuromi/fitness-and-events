const registrationStatusController = {};

//======== Approve registration =======================
registrationStatusController.approveRegistration = async (req, res) => {
  const registration = res.registration;
  try {
    registration.approve = true;
    registration.save();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//============= Reject registration ============================
registrationStatusController.rejectRegistration = async (req, res) => {
  const registration = res.registration;
  try {
    registration.approve = false;
    registration.save();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = registrationStatusController;
