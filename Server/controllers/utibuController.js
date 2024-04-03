// controllers/utibuController.js
const { sql } = require('../Config/db');

// Function to make an order for medication
const makeOrder = async (req, res) => {
  try {
    // Extract order details from request body
    const { customerId, medicationId, quantity } = req.body;

    // Perform database operation to create the order
    await sql.query`INSERT INTO Orders (customerId, medicationId, quantity) VALUES (${customerId}, ${medicationId}, ${quantity})`;

    res.status(201).json({ message: 'Order placed successfully' });
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Function to check statement for a customer
const checkStatement = async (req, res) => {
  try {
    const { customerId } = req.params;

    // Perform database operation to retrieve statement for the specified customer
    const statement = await sql.query`SELECT * FROM Statement WHERE customerId = ${customerId}`;

    res.status(200).json(statement.recordset);
  } catch (error) {
    console.error('Error checking statement:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  makeOrder,
  checkStatement,
};
