const mongoose = require("mongoose");
const app = require("./src/app");
const { port } = require("./config/server.config");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

try {
  mongoose
    .connect(process.env.LOCAL_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connection to database successful..."));
} catch (err) {
  console.log("Error connecting to database", err);
}

app.listen(port, () => console.log(`Listening on port ${port}...`));
