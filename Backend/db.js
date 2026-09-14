
const mongoose = require("mongoose");
require('dotenv').config();
const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("MongoDB connected");
};

module.exports = connectDB;