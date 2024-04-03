const jwt = require('jsonwebtoken');

// Middleware function to authenticate user using JWT token
const authenticateUser = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // Verify JWT token
    const decoded = jwt.verify(token, 'test');
    req.user = decoded.user;
    next(); // Proceed to next middleware or route handler
  } catch (error) {
    console.error('Error authenticating user:', error);
    res.status(401).json({ error: 'Unauthorized' });
  }
};

module.exports = {
  authenticateUser,
};
