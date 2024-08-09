const express = require("express");
const mongoose = require("mongoose");
const LoginRoute = require("./routes/Login.js");

const app = express();
const PORT = 9000;

app.use(express.json());
app.use("/login", LoginRoute);

const startServer = async () => {
  console.log(`Server Started at http://localhost:${PORT}`);
};

const dbconnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017");
    console.log("DB connection established");
  } catch (error) {
    console.log(error);
  }
};

app.listen(PORT, async () => {
  await dbconnection();
  startServer();
});
