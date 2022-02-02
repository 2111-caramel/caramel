const Sequelize = require("sequelize");
const db = require("../db");

const City = db.define("city", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = City;
