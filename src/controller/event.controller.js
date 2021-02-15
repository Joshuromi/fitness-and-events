const Event = require("../models/event.model");
const User = require("../models/user.model");

const eventController = {};

eventController.createEvent = async (req, res) => {
  const { title, description, price, date } = req.body;
  const { user_id } = req.headers;
  const { filename } = req.file;

  try {
    const user = await User.findById(user_id);
    if (!user) {
      return res.status(400).json({ message: "User does not exist!" });
    }

    const event = new Event({
      title,
      description,
      price: parseFloat(price),
      date,
      user: user_id,
      thumbnail: filename,
    });

    const createdEvent = await event.save();
    res.status(200).json(createdEvent);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

eventController.getEventById = async (req, res) => {
  const { eventId } = req.params;

  try {
    const event = await Event.findById(eventId);
    if (event) {
      res.status(200).json(event);
    } else {
      return res.status(400).json({ message: "Event does not exist!" });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = eventController;
