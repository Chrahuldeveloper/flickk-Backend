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
  Pic: {
    type: String,
    required: true,
  },
  pdf:{
    type: String,
  }
});

const users = mongoose.model("users", User);

module.exports = users;
