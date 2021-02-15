const EventModel = require("../models/event.model");
const User = require("../models/user.model");

const eventController = {};

//================= Create new Event =======================================
eventController.createEvent = async (req, res) => {
  const { title, description, price, date, sport } = req.body;
  const { user_id } = req.headers;
  const { filename } = req.file;

  try {
    const user = await User.findById(user_id);
    if (!user) {
      return res.status(400).json({ message: "User does not exist!" });
    }

    const event = new EventModel({
      title,
      description,
      price: parseFloat(price),
      date,
      sport,
      user: user_id,
      thumbnail: filename,
    });

    const createdEvent = await event.save();
    res.status(200).json(createdEvent);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

//================= Get one event by id =======================================
eventController.getEventById = async (req, res) => {
  const { eventId } = req.params;

  try {
    const event = await EventModel.findById(eventId);
    if (event) {
      res.status(200).json(event);
    } else {
      return res.status(400).json({ message: "Event does not exist!" });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

//================= Get all events =======================================
eventController.getAllEvents = async (req, res) => {
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

//============== Delete Event =======================================
eventController.deleteEvent = async (req, res) => {
  const { eventId } = req.params;
  try {
    await EventModel.findByIdAndDelete(eventId);
    res.status(200).json({ message: "Event deleted" });
  } catch (error) {
    return res.status(400).json({ message: "Event id does not exist" });
  }
};

module.exports = eventController;
