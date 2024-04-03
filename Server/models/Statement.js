// models/Statement.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

const Statement = sequelize.define('Statement', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  customerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  // Add other fields as needed
});

module.exports = Statement;
