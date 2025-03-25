const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { 
        type: String, 
        enum: ["admin", "staff", "customer"], 
        default: "customer" 
    },

    // Staff-specific details
    staffDetails: {
        isActive: { type: Boolean, default: true }, // True = Active, False = On Leave
        position: { type: String }, // Example: Waiter, Chef, Manager
        salary: { type: Number, default: 0 }
    },

    // Customer-specific details
    loyaltyPoints: { type: Number, default: 0 }, // Reward points for customers

}, { timestamps: true });

// Hash password before saving user
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next(); // Skip if password is unchanged
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Compare entered password with hashed password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
