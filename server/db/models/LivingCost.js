const Sequelize = require("sequelize");
const db = require("../db");

const LivingCost = db.define("livingCost", {
  daycare: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  beer: {
    type: Sequelize.FLOAT(2),
    allowNull: false,
  },
  cappuccino: {
    type: Sequelize.FLOAT(2),
    allowNull: false,
  },
  milk: {
    type: Sequelize.FLOAT(2),
    allowNull: false,
  },
  bread: {
    type: Sequelize.FLOAT(2),
    allowNull: false,
  },
  eggs: {
    type: Sequelize.FLOAT(2),
    allowNull: false,
  },
  gas: {
    type: Sequelize.FLOAT(2),
    allowNull: false,
  },
});

module.exports = LivingCost;
