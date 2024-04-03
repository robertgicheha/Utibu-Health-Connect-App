const express = require('express');
const router = express.Router();
const medicationController = require('../controllers/medicationController');
const authMiddleware = require('../middlewares/authMiddleware');

// Route for ordering medication
router.post('/order', authMiddleware.authenticateUser, medicationController.orderMedication);

module.exports = router;
