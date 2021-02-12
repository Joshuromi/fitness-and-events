const Event = require("../models/event.model");
const User = require("../models/user.model");
const eventController = {};

eventController.createEvent = async (req, res) => {
  const { title, description, price, date } = req.body;
  const { userId } = req.headers;
  const { filename } = req.file;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "User does not exist!" });
    }

    const event = new Event({
      title,
      description,
      price,
      date,
      user: userId,
      thumbnail: filename,
    });

    const createdEvent = await event.save();
    res.status(200).json(createdEvent);
  } catch (error) {
    res.status(400).Json({ message: error.message });
    console.log(error);
  }
};

module.exports = eventController;
