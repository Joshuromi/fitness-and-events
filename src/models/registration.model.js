const mongoose = require("mongoose");

const RegistrationSchema = mongoose.Schema({
  date: { type: String },
  approved: { type: Boolean },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
  },
});

module.exports = mongoose.model("Registration", RegistrationSchema);
