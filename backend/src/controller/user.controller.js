const bcrypt = require("bcrypt");
const UserModel = require("../models/user.model");
const userController = {};

//=========== Register new user ==================================
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
      await user.save();
      res.status(201).json({
        _id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      });
    } else {
      return res
        .status(400)
        .json({ message: "User with this email already exist!" });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

//=============== Get user by Id ===================================
userController.getUserById = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await UserModel.findById(userId);
    if (user) {
      res.status(200).json(user);
    } else {
      return res.status(404).json({ message: "User id does not exist!" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = userController;
