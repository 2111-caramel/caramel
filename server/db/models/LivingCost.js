const Sequelize = require("sequelize");
const db = require("../db");

const LivingCost = db.define("livingCost", {
  daycare: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  beer: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  cappuccino: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  milk: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  bread: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  eggs: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  gas: {
    type: Sequelize.DECIMAL(10,2),
    allowNull: false,
  },
});

module.exports = LivingCost;
