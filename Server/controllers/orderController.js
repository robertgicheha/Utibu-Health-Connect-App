// controllers/orderController.js
const { sql } = require('../db');

// Function to create a new order
const createOrder = async (req, res) => {
  try {
    // Extract order details from request body
    const { customerId, productId, quantity } = req.body;

    // Perform database operation to create the order
    await sql.query`INSERT INTO Orders (customerId, productId, quantity) VALUES (${customerId}, ${productId}, ${quantity})`;

    res.status(201).json({ message: 'Order created successfully' });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Function to retrieve orders for a customer
const getOrdersForCustomer = async (req, res) => {
  try {
    const { customerId } = req.params;

    // Perform database operation to retrieve orders for the specified customer
    const orders = await sql.query`SELECT * FROM Orders WHERE customerId = ${customerId}`;

    res.status(200).json(orders.recordset);
  } catch (error) {
    console.error('Error retrieving orders:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createOrder,
  getOrdersForCustomer,
};
