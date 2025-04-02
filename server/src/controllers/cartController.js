const Cart = require("../Models/cartModel");
const MenuItem = require("../models/menuitemModel");

// Get user's cart
exports.getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.user.id }).populate("items.menuItemId", "name price image");
        if (!cart) return res.status(404).json({ message: "Cart not found" });
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create or Update Cart (Add Items)
exports.addToCart = async (req, res) => {
    try {
        const { menuItemId, quantity } = req.body;

        // Validate menu item
        const menuItem = await MenuItem.findById(menuItemId);
        if (!menuItem) return res.status(404).json({ message: "Menu item not found" });

        let cart = await Cart.findOne({ userId: req.user.id });

        if (!cart) {
            // If no cart exists, create a new one
            cart = new Cart({ userId: req.user.id, items: [], totalPrice: 0 });
        }

        // Check if item already exists in cart
        const existingItem = cart.items.find(item => item.menuItemId.toString() === menuItemId);

        if (existingItem) {
            existingItem.quantity += quantity; // Increase quantity
        } else {
            // Add new item to cart
            cart.items.push({
                menuItemId,
                name: menuItem.name,
                price: menuItem.price,
                quantity,
                image: menuItem.image || "",
            });
        }

        // Recalculate total price
        cart.totalPrice = cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

        await cart.save();
        res.status(200).json({ message: "Item added to cart", cart });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Cart Item Quantity
exports.updateCartItem = async (req, res) => {
    try {
        const { menuItemId, quantity } = req.body;

        let cart = await Cart.findOne({ userId: req.user.id });
        if (!cart) return res.status(404).json({ message: "Cart not found" });

        // Find item in cart
        const item = cart.items.find(item => item.menuItemId.toString() === menuItemId);
        if (!item) return res.status(404).json({ message: "Item not found in cart" });

        // Update quantity
        if (quantity > 0) {
            item.quantity = quantity;
        } else {
            // Remove item if quantity is 0
            cart.items = cart.items.filter(item => item.menuItemId.toString() !== menuItemId);
        }

        // Recalculate total price
        cart.totalPrice = cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

        await cart.save();
        res.status(200).json({ message: "Cart updated", cart });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Remove item from cart
exports.removeItemFromCart = async (req, res) => {
    try {
        const { menuItemId } = req.body;

        let cart = await Cart.findOne({ userId: req.user.id });
        if (!cart) return res.status(404).json({ message: "Cart not found" });

        // Remove the item from cart
        cart.items = cart.items.filter(item => item.menuItemId.toString() !== menuItemId);

        // Recalculate total price
        cart.totalPrice = cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

        await cart.save();
        res.status(200).json({ message: "Item removed from cart", cart });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Empty the cart (Delete cart)
exports.clearCart = async (req, res) => {
    try {
        let cart = await Cart.findOne({ userId: req.user.id });
        if (!cart) return res.status(404).json({ message: "Cart not found" });

        cart.items = []; // Clear items
        cart.totalPrice = 0; // Reset total price
        await cart.save();

        res.status(200).json({ message: "Cart cleared", cart });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
