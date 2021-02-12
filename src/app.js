const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const homeRoute = require("./routes/home.route");
const userRoute = require("./routes/user.route");
const eventRoute = require("./routes/event.route");

app.use("/", homeRoute);
app.use("/user", userRoute);
app.use("/event", eventRoute);

module.exports = app;
