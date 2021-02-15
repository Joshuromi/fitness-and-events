const bcrypt = require("bcrypt");
const UserModel = require("../models/user.model");
const userController = {};

userController.registerUser = async (req, res) => {
  const { firstName, lastName, email, password, dateCreated } = req.body;

  try {
    const existingUser = await UserModel.findOne({ email });

    if (!existingUser) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new UserModel({
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
    return res.status(400).json({ message: error.message });
  }
};

userController.getUser = async (req, res) => {
  res.status(200).json(res.user);
};

module.exports = userController;
