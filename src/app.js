const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const homeRoute = require("./routes/home.router");
const userRoute = require("./routes/user.router");

app.use("/", homeRoute);
app.use("/user", userRoute);

module.exports = app;
