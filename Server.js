const express = require("express");
const mongoose = require("mongoose");
const LoginRoute = require("./routes/Login.js");
const SavepdfRoute = require("./routes/Savepdf.js");
const cors = require("cors");
const app = express();
const PORT = 9000;

app.use(cors());
app.use(express.json());
app.use("/login", LoginRoute);
app.use("/pdf/:id", SavepdfRoute);

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
