const Sequelize = require('sequelize');
const db = require('../db');
const User = require('./User');

module.exports = db.define('message', {
  content: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  defaultScope: {
    include: [
      { model: User }
    ]
  }
});