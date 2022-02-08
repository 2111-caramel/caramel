const Sequelize = require("sequelize");
const db = require("../db");

const Transportation = db.define("transportation", {
  car: {
    type: Sequelize.DECIMAL(10,1),
    allowNull: false,
  },
  workFromHome: {
    type: Sequelize.DECIMAL(10,1),
    allowNull: false,
  },
  train: {
    type: Sequelize.DECIMAL(10,1),
    allowNull: false,
  },
  bike: {
    type: Sequelize.DECIMAL(10,1),
    allowNull: false,
  },
  walking: {
    type: Sequelize.DECIMAL(10,1),
    allowNull: false,
  },
  bus: {
    type: Sequelize.DECIMAL(10,1),
    allowNull: false,
  },
  motorbike: {
    type: Sequelize.DECIMAL(10,1),
    allowNull: false,
  },
  trainAndBus: {
    type: Sequelize.DECIMAL(10, 1),
    allowNull: false,
  }
});

module.exports = Transportation;
