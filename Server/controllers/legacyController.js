// controllers/legacyController.js
const { LegacyOrder } = require('../models'); // Import model for legacy orders

// Function to create a new online order and save it to the legacy database
const createOnlineOrder = async (req, res) => {
  try {
    // Extract order details from request body
    const { customerId, productId, quantity } = req.body;

    // Create a new online order in the new system
    // Implement logic to save the order in the new system

    // Save the online order to the legacy database
    await LegacyOrder.create({
      customerId,
      productId,
      quantity,
    });

    res.status(201).json({ message: 'Online order placed successfully' });
  } catch (error) {
    console.error('Error placing online order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createOnlineOrder,
};
