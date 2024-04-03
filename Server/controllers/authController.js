const { sql } = require('../db');

// Controller function for user login
const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await sql.query`SELECT * FROM Users WHERE username = ${username} AND password = ${password}`;
    if (result.recordset.length === 1) {
      // User exists and credentials are correct
      // Generate and return JWT token
      res.json({ token: 'generated-token' });
    } else {
      // User not found or credentials are incorrect
      res.status(401).json({ error: 'Invalid username or password' });
    }
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller function for user registration
const registerUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    // Check if user already exists
    const existingUser = await sql.query`SELECT * FROM Users WHERE username = ${username}`;
    if (existingUser.recordset.length === 0) {
      // User does not exist, so register
      await sql.query`INSERT INTO Users (username, password) VALUES (${username}, ${password})`;
      res.status(201).json({ message: 'User registered successfully' });
    } else {
      // User already exists
      res.status(400).json({ error: 'Username already exists' });
    }
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  loginUser,
  registerUser,
};
