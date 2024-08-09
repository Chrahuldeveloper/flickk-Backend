const express = require("express");
const SavepdfRoute = express.Router();
const users = require("../models/User.js");

SavepdfRoute.post("/:id", async (req, res) => {
  try {
    const { url } = req.body;
    const userId = req.params.id;
    const user = await users.findOne({ _id: userId });
    if (!user) {
      return res.status(404).send("User Not exists");
    }
    user.pdf = url;
    await user.save();
    res.status(200).json({ message: "PDF URL updated successfully" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = SavepdfRoute;
