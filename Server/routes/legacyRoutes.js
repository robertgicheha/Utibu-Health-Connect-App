// routes/legacyRoutes.js
const express = require('express');
const router = express.Router();
const legacyController = require('../controllers/legacyController');

// Route to create a new online order and save it to the legacy database
router.post('/online-order', legacyController.createOnlineOrder);

module.exports = router;
