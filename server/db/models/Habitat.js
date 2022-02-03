const Sequelize = require('sequelize')
const db = require('../db')
const axios = require('axios');

const Habitat = db.define('weather', {
    winterHigh: {
//av temp
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {
            notEmpty:true
        }
    },
    winterLow: {
        //av temp
                type: Sequelize.FLOAT,
                allowNull: false,
                validate: {
                    notEmpty:true
                }
            },
    springHigh: {
//av temp
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {
            notEmpty:true
        }   
    },
    springLow: {
        //av temp
                type: Sequelize.FLOAT,
                allowNull: false,
                validate: {
                    notEmpty:true
                }   
            },
    summerHigh: {
//av temp
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {
            notEmpty:true
        }
    },
    summerLow: {
        //av temp
                type: Sequelize.FLOAT,
                allowNull: false,
                validate: {
                    notEmpty:true
                }
            },
    fallHigh: {
//av temp
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {
            notEmpty:true
        }
    },
    fallLow: {
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
    },
    cleanliness: {
//-2 to +2
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    airQuality: {
//-2 to +2
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    parks: {
//-2 to +2
        type: Sequelize.FLOAT,
        allowNull: false,
    }
})

module.exports = Habitat;


