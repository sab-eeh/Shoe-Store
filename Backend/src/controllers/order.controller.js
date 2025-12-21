import Order from "../models/Order.js";

/**
 * POST /api/orders
 */
export const createOrder = async (req, res) => {
  try {
    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      totalPrice,
    } = req.body;

    if (!orderItems || orderItems.length === 0) {
      return res.status(400).json({ message: "No order items" });
    }

    const order = new Order({
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      totalPrice,
      isPaid: paymentMethod === "card" ? true : false,
      paidAt: paymentMethod === "card" ? Date.now() : null,
    });

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Order creation failed" });
  }
};

/**
 * GET /api/orders
 */
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};

/**
 * GET /api/orders/:id
 */
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json(order);
  } catch (error) {
    res.status(400).json({ message: "Invalid order ID" });
  }
};
