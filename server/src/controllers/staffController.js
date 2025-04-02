const User = require("../Models/UserModel");


// Create a new staff member (Admin Only)
exports.createStaff = async (req, res) => {
    try {
        const { name, email, password, role, position } = req.body;

        // Check if email already exists
        let existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already registered" });
        }

        // Ensure role is either "staff" or "admin"
        if (!["staff", "admin"].includes(role)) {
            return res.status(400).json({ message: "Invalid role. Role must be 'staff' or 'admin'." });
        }

        // Create staff user
        const staff = new User({
            name,
            email,
            password,
            role,
            position, // Example: "Chef", "Manager", "Waiter"
            status: "active", // Default status for staff
        });

        await staff.save();

        res.status(201).json({ message: "Staff member created successfully", staff });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all staff members (Admin Only)
exports.getAllStaff = async (req, res) => {
    try {
        const staffMembers = await User.find({ role: "staff" }).select("-password");
        res.status(200).json(staffMembers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single staff member by ID
exports.getStaffById = async (req, res) => {
    try {
        const staff = await User.findOne({ _id: req.params.id, role: "staff" }).select("-password");
        if (!staff) return res.status(404).json({ message: "Staff member not found" });

        res.status(200).json(staff);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update staff details (Admin Only)
exports.updateStaff = async (req, res) => {
    try {
        let staff = await User.findOne({ _id: req.params.id, role: "staff" });
        if (!staff) return res.status(404).json({ message: "Staff member not found" });

        staff = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).select("-password");

        res.status(200).json({ message: "Staff updated successfully", staff });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a staff member (Admin Only)
exports.deleteStaff = async (req, res) => {
    try {
        let staff = await User.findOne({ _id: req.params.id, role: "staff" });
        if (!staff) return res.status(404).json({ message: "Staff member not found" });

        await staff.deleteOne();
        res.status(200).json({ message: "Staff member deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
