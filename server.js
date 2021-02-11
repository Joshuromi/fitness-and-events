const mongoose = require("mongoose");
const app = require("./src/app");
const { port } = require("./config/config.server");

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

app.listen(port, () => console.log(`Listening on port ${port}...`));
