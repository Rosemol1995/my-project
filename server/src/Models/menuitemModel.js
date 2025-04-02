const { default: mongoose } = require("mongoose");

const MenuItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    isAvailable: { type: Boolean, default: true }
  }, { timestamps: true });
  
  module.exports = mongoose.model("MenuItem", MenuItemSchema);
  