const UserModel = require("../models/user.model");

const getUserById = async (req, res, next) => {
  let user;
  try {
    user = await UserModel.findById(req.params.userId);
    console.log(user);
    if (user == null) {
      return res.status(404).json({ message: "User id does not exist!" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.user = user;
  next();
};

module.exports = getUserById;
