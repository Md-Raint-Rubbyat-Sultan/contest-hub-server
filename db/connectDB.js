const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  console.log("connecting");
  await mongoose.connect(process.env.DB_LINK, { dbName: "contestHub" });
  console.log("connected");
};

module.exports = connectDB;
