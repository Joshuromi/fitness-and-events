const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

try {
  mongoose
    .connect(process.env.MONGO_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connection to database successful..."));
} catch (err) {
  console.log("Error connecting to database", err);
}

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Express");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
