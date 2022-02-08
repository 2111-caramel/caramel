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
  imageUrlMobile: {
    type: Sequelize.STRING,
    defaultValue: 'https://cdn1.vectorstock.com/i/1000x1000/68/70/modern-urban-cartoon-city-street-with-young-people-vector-22936870.jpg'
  },
  imageUrlWeb: {
    type: Sequelize.STRING,
    defaultValue: 'https://cdn1.vectorstock.com/i/1000x1000/68/70/modern-urban-cartoon-city-street-with-young-people-vector-22936870.jpg'
  },
  info: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  lat: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  lng: {
    type: Sequelize.FLOAT,
    allowNull: false,
  }
});

module.exports = City;
