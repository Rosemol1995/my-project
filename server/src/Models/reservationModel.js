const ReservationSchema = new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    tableNumber: { type: Number, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    status: { type: String, enum: ["pending", "confirmed", "cancelled"], default: "pending" }
  }, { timestamps: true });
  
  module.exports = mongoose.model("Reservation", ReservationSchema);
  