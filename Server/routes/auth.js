const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route for user login
router.post('/login', authController.loginUser);

// Route for user registration
router.post('/register', authController.registerUser);

module.exports = router;
