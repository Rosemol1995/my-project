const User = require("../Models/UserModel");
const jwt = require("jsonwebtoken");
const { createToken } = require("../utilities/generateToken");
const { hashPassword } = require("../utilities/passwordUtilities");

// Register a new customer with confirm password
exports.registerCustomer = async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;

        // Check if passwords match
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        // Check if user already exists
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: "Email already registered" });

        const hashedPassword = await hashPassword(password)
        // Create new user
        user = new User({
            name,
            email,
            password: hashedPassword,
            role: "customer",
            loyaltyPoints: 0
        });

        await user.save();

        res.status(201).json({ message: "Customer registered successfully", user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Get all customers (Admin only)
exports.getAllCustomers = async (req, res) => {
    try {
        const customers = await User.find({ role: "customer" }).select("-password");
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single customer by ID
exports.getCustomerById = async (req, res) => {
    try {
        const customer = await User.findOne({ _id: req.params.id, role: "customer" }).select("-password");
        if (!customer) return res.status(404).json({ message: "Customer not found" });
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update customer details (Customer can update their own details, Admin can update any customer)
exports.updateCustomer = async (req, res) => {
    try {
        let customer = await User.findOne({ _id: req.params.id, role: "customer" });

        if (!customer) return res.status(404).json({ message: "Customer not found" });

        // Allow customer to update only their own details
        if (req.user.role !== "admin" && req.user.id !== req.params.id) {
            return res.status(403).json({ message: "Not authorized to update this customer" });
        }

        customer = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).select("-password");
        res.status(200).json({ message: "Customer updated successfully", customer });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a customer (Admin only)
exports.deleteCustomer = async (req, res) => {
    try {
        let customer = await User.findOne({ _id: req.params.id, role: "customer" });

        if (!customer) return res.status(404).json({ message: "Customer not found" });

        await customer.deleteOne();
        res.status(200).json({ message: "Customer deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

