const Sequelize = require("sequelize");
const db = require("../db");
const axios = require("axios");

const City_Weather = db.define("city_weather", {});

module.exports = City_Weather;
