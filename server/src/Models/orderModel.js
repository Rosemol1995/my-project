

const OrderSchema = new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [
      {
        menuItem: { type: mongoose.Schema.Types.ObjectId, ref: "MenuItem", required: true },
        quantity: { type: Number, required: true }
      }
    ],
    totalAmount: { type: Number, required: true },
    status: { type: String, enum: ["pending", "confirmed", "preparing", "completed", "cancelled"], default: "pending" }
  }, { timestamps: true });
  
  module.exports = mongoose.model("Order", OrderSchema);
  
  