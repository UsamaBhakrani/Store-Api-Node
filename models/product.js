const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  featured: Boolean,
  rating: Number,
  createdAt: { type: Date, default: Date.now },
  name: String,
  price: Number,
  company: String,
});

module.exports = mongoose.model("Product", productSchema);
