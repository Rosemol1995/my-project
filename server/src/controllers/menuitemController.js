const MenuItem = require("../models/MenuItem");

// Get all menu items
exports.getMenuItems = async (req, res) => {
    try {
        const menuItems = await MenuItem.find();
        res.json(menuItems);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get menu item by ID
exports.getMenuItemById = async (req, res) => {
    try {
        const menuItem = await MenuItem.findById(req.params.id);
        if (!menuItem) return res.status(404).json({ message: "Menu item not found" });
        res.json(menuItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a menu item
exports.createMenuItem = async (req, res) => {
    try {
        const newMenuItem = new MenuItem(req.body);
        await newMenuItem.save();
        res.status(201).json(newMenuItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete menu item
exports.deleteMenuItem = async (req, res) => {
    try {
        await MenuItem.findByIdAndDelete(req.params.id);
        res.json({ message: "Menu item deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};