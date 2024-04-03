const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const medicationRoutes = require('./routes/medication');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/medication', medicationRoutes);
app.use('/api/utibu', utibuRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/legacy', legacyRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


