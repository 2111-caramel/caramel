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

// HOOKS

Pollution.addHook('beforeCreate', (city) => {
    city.drinkingWaterQuality = Math.round((city.drinkingWaterQuality * 25) + 50)
    city.cleanliness = Math.round((city.cleanliness * 25) + 50)
    city.indexPollution = Math.round(city.indexPollution)
    city.airQuality = Math.round((city.airQuality * 25) + 50)
    city.greenParksQuality = Math.round((city.greenParksQuality * 25) + 50)
});

module.exports = Pollution;
