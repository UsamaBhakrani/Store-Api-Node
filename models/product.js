const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  featured: { type: Boolean, default: false },
  rating: { type: Number, default: 4.5 },
  createdAt: { type: Date, default: Date.now },
  name: { type: String, required: [true, "Name is Required"] },
  price: { type: Number, required: [true, "Price is Required"] },
  company: { type: String, enum: ["ikea", "liddy", "caressa", "marcos"] },
});

module.exports = mongoose.model("Product", productSchema);
