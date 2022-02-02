//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const City = require('./models/City')
const PrimaryStats = require('./models/PrimaryStats')

//associations could go here!
City.hasOne(PrimaryStats)
PrimaryStats.belongsTo(City)

module.exports = {
  db,
  models: {
    User,
    City,
    PrimaryStats
  },
}
