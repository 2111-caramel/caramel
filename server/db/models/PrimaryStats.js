const Sequelize = require("sequelize");
const db = require("../db");

const PrimaryStats = db.define("primaryStats", {
  rent1br: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  rent3br: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  housePrice: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  salary: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

// HOOKS

PrimaryStats.addHook('beforeCreate', (city) => {
  city.rent1br = Math.round(city.rent1br)
  city.rent3br = Math.round(city.rent3br)
  city.housePrice = Math.round(city.housePrice)
  city.salary = Math.round(city.salary)
});

module.exports = PrimaryStats;
