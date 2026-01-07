const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("Home page for noti service");
});

app.listen(process.env.PORT, async () => {
  console.log("Notification Service Started");

  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("SuccessFully Connected to Mongo");
  } catch (error) {}
});
