const EventModel = require("../models/event.model");

const dashboardController = {};

//================= Get all events =======================================
dashboardController.getAllEvents = async (req, res) => {
  const { sport } = req.params;
  const query = sport || {};

  try {
    const events = await EventModel.find(query);
    if (events) {
      return res.status(200).json(events);
    }
    return res.status(400).json({ message: "We do not hane any event yet" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = dashboardController;
