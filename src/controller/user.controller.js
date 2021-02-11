const User = require("../models/user.models");
const controller = {};

controller.registerUser = async (req, res) => {
  const { firstName, lastName, email, password, dateCreated } = req.body;
  const user = new User({
    firstName,
    lastName,
    email,
    password,
    dateCreated,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    throw Error(`Error registering user: ${error}`);
  }
};

module.exports = controller;
