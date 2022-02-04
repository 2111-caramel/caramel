const Sequelize = require("sequelize");
const db = require("../db");
const axios = require("axios");

const Pollution = db.define("pollution", {
  drinkingWaterQuality: {
    //av temp
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  cleanliness: {
    //av temp
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  indexPollution: {
    //av temp
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  airQuality: {
    //av temp
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  greenParksQuality: {
    //-2 to +2
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});

module.exports = Pollution;
