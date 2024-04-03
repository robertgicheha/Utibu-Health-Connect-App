// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Route to create a new order
router.post('/makeorder', orderController.createOrder);

// Route to retrieve orders for a customer
router.get('/orders:customerId', orderController.getOrdersForCustomer);

// Route to get all orders
router.get('/orders', orderController.getAllOrders);

module.exports = router;
