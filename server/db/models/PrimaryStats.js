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

module.exports = PrimaryStats;
