const mongoose = require("mongoose");

const connectDB = async (url) => {
  await mongoose
    .connect(url)
    .then(() => console.log("MongoDB Running"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
