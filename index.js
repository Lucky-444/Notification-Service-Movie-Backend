const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const ticketRoutes = require('./routes/ticket.routes');
const Cron = require('./crons/cron');
const cors = require('cors');


dotenv.config();
// app.use(
//   cors({
//     origin: "http://localhost:3001", // your frontend origin
//     credentials: true, // allow cookies to be sent
//   })
// );

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);


ticketRoutes(app);
app.listen(process.env.PORT, async () => {
  console.log("Notification Service Started");

  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("SuccessFully Connected to Mongo");
  } catch (error) {
    console.log(error);
  }

  Cron.mailerCron();
});
