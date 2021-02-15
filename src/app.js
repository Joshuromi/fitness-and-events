const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const homeRoute = require("./routes/home.route");
const userRoute = require("./routes/user.route");
const eventRoute = require("./routes/event.route");
const dashboardRoute = require("./routes/dashboard.route");

app.use("/", homeRoute);
app.use("/user", userRoute);
app.use("/events", eventRoute);
app.use("/dashboard", dashboardRoute);
app.use("/files", express.static("files"));

module.exports = app;
