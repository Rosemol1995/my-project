const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true },
    capacity: { type: Number, required: true },
    status: {
        type: String,
        enum: ["available", "reserved", "occupied"],
        default: "available",
    },
    // References to Reservation documents if needed (optional)
    reservations: [{ type: mongoose.Schema.Types.ObjectId, ref: "Reservation" }],
}, { timestamps: true });

module.exports = mongoose.model("Table", tableSchema);
