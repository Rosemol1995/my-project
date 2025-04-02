const { default: mongoose } = require("mongoose");

const WaitingListSchema = new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    partySize: { type: Number, required: true },
    status: { type: String, enum: ["waiting", "seated", "cancelled"], default: "waiting" }
  }, { timestamps: true });
  
  module.exports = mongoose.model("WaitingList", WaitingListSchema);
  