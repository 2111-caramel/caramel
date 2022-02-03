//this is the access point for all things database related!

const db = require('./db')
//const {Healthcare, LivingCost, PrimaryStats, Transportation, City, User} = require("./models");
const User = require('./models/User')
const Weather = require('./models/Weather')
const City = require('./models/City')
const PrimaryStats = require('./models/PrimaryStats')
const LivingCost = require('./models/LivingCost')
const Healthcare = require('./models/Healthcare')
const Transportation = require('./models/Transportation')

//associations could go here!
City.hasOne(PrimaryStats)
PrimaryStats.belongsTo(City)

City.hasOne(LivingCost)
LivingCost.belongsTo(City)

City.hasOne(Healthcare)
Healthcare.belongsTo(City)

City.hasOne(Transportation)
Transportation.belongsTo(City)

module.exports = {
  db,
  models: {
    User,
    Weather,
    City,
    PrimaryStats,
    LivingCost,
    Healthcare,
    Transportation
  },
}
