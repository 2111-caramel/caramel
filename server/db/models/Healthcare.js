const Sequelize = require("sequelize");
const db = require("../db");

// to convert score to base 100: 50 + (25 * score)
// example: original score of 1 would become 75

const Healthcare = db.define("healthcare", {
  cost: {
    type: Sequelize.FLOAT(2),
    allowNull: false,
  },
  skill: {
    type: Sequelize.FLOAT(2),
    allowNull: false,
  },
  index: {
    type: Sequelize.FLOAT(2),
    allowNull: false,
  },
});

module.exports = Healthcare;
