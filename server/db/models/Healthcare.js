const Sequelize = require("sequelize");
const db = require("../db");

// to convert score to base 100: 50 + (25 * score)
// example: original score of 1 would become 75

const Healthcare = db.define("healthcare", {
  cost: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  skill: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  index: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Healthcare;
