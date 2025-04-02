const Order = require("../Models/OrderModel");


// Get all orders
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("customer items.menuItem");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get order by ID
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate(
      "customer items.menuItem"
    );
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create an order
exports.createOrder = async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// update order
exports.updateOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { items, totalAmount, status } = req.body;
    if (!items || !totalAmount || !status) {
      return res.status(400).json({
        error: "Items,total amount and status are required",
      });
    }
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(400).json({
        error: "Order not found",
      });
    }
    const updatedOrder = await Order.findByIdAndUpdate(orderId);
    res.status(200).json({
      success: true,
      data: updatedOrder,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};

// Delete order
exports.deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
