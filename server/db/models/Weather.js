const Sequelize = require("sequelize");
const db = require("../db");
const axios = require("axios");

const Weather = db.define("weather", {
  month: {
    //av temp
    type: Sequelize.STRING,
    allowNull: false,
  },
  avgMinTemp: {
    //av temp
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  avgMaxTemp: {
    //av temp
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  avgDailyRainfall: {
    //av temp
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});

module.exports = Weather;
