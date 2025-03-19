const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");

// Login function - Generates JWT and stores it in cookies
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User not found" });

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id, role: user.role }, 
            process.env.JWT_SECRET, 
            { expiresIn: "1d" }
        );

        // Set token in HTTP-only cookie
        res.cookie("token", token, {
            httpOnly: true,  // Prevents JavaScript access (XSS protection)
            secure: process.env.NODE_ENV === "production", // Secure only in production
            sameSite: "strict", // Prevent CSRF attacks
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        });

        res.status(200).json({ message: "Logged in successfully", user: { id: user._id, role: user.role } });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Logout function - Clears the token cookie
exports.logout = (req, res) => {
    res.cookie("token", "", { maxAge: 1 }); // Clear the cookie
    res.json({ message: "Logged out successfully" });
};
