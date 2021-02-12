const { response } = require("../app");
const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const userController = {};

userController.registerUser = async (req, res) => {
  const { firstName, lastName, email, password, dateCreated } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        dateCreated,
      });
      const newUser = await user.save();
      res.status(201).json(newUser);
    } else {
      return res
        .status(400)
        .json({ message: "User with this email already exist!" });
    }
  } catch (error) {
    throw Error(`Error registering user: ${error}`);
  }
};

userController.getUserById = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);
    res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ message: "User id  does not exist!" });
  }
};

module.exports = userController;
