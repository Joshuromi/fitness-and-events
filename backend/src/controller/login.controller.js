const bcrypt = require("bcrypt");
const UserModel = require("../models/user.model");

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.status(200).json({ message: "Required field missing" });
    }

    const user = await UserModel.findOne({ email });
    if (user) {
      const correctPassword = await bcrypt.compare(password, user.password);
      if (correctPassword) {
        const userResponse = {
          _id: user._id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
        };
        res.status(200).json(userResponse);
      } else {
        res.status(200).json({ message: "Email or Password does not match" });
      }
    } else {
      res
        .status(200)
        .json({ message: "User not found! Do you want to register instead?" });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = loginUser;
