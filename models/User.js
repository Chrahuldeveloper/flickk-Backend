const mongoose = require("mongoose");

const User = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  Phone: {
    type: String,
    required: true,
  },
  Pic : {
    type: String,
    required: true,
  }
});

const users = mongoose.model("users", User);

module.exports = users;