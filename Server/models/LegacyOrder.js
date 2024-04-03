// models/LegacyOrder.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

const LegacyOrder = sequelize.define('LegacyOrder', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  customerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  // Add other fields as needed
});

module.exports = LegacyOrder;
