const Sequelize = require("sequelize");
const db = require("../db");

// to convert score to base 100: 50 + (25 * score)
// example: original score of 1 would become 75

const Healthcare = db.define("healthcare", {
  cost: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  skill: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  index: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});

// HOOKS

Healthcare.addHook('beforeCreate', (city) => {
  city.cost = Math.round((city.cost * 25) + 50)
  city.skill = Math.round((city.skill * 25) + 50)
  city.index = Math.round(city.index)
});

module.exports = Healthcare;
