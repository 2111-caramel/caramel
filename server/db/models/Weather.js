const Sequelize = require('sequelize')
const db = require('../db')
const axios = require('axios');

const Weather = db.define('weather', {
    winter: {
//av temp
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {
            notEmpty:true
        }
    },
    spring: {
//av temp
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {
            notEmpty:true
        }   
    },
    summer: {
//av temp
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {
            notEmpty:true
        }
    },
    fall: {
//av temp
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {
            notEmpty:true
        }
    },
    water: {
//-2 to +2
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {
            notEmpty:true
        }
    },
    pollution: {
//score out of 100
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {
            notEmpty:true,
            min: 0.1,
            max: 100
        }
    },
    cleanliness: {
//-2 to +2
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {
            notEmpty:true,
            min: -2,
            max: +2
        }
    },
    airQuality: {
//-2 to +2
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {
            notEmpty:true,
            min: -2,
            max: +2
        }
    },
    parks: {
//-2 to +2
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {
            notEmpty:true,
            min: -2,
            max: +2
        }
    }
})

module.exports = Weather;


