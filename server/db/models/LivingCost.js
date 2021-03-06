const Sequelize = require("sequelize");
const db = require("../db");

const LivingCost = db.define("livingCost", {
  daycare: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  beer: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
  },
  cappuccino: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
  },
  milk: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
  },
  bread: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
  },
  eggs: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
  },
  gas: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
  },
  trainPass: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
  },
  trainTicket: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
  },
  meal: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
  },
  movie: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
  },
  gym: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

// HOOKS

LivingCost.addHook('beforeCreate', (city) => {
  city.daycare = Math.round(city.daycare)
  city.gym = Math.round(city.gym)

});

module.exports = LivingCost;
