// routes/utibuRoutes.js
const express = require('express');
const router = express.Router();
const utibuController = require('../controllers/utibuController');

// Route to make an order for medication
router.post('/order', utibuController.makeOrder);

// Route to check statement for a customer
router.get('/statement/:customerId', utibuController.checkStatement);

module.exports = router;
