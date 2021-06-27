const mongoose = require("mongoose");
require("dotenv").config();

const dbURI = "mongodb://127.0.0.1:27017";

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose.createConnection(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to db for pdf");
  }
);
