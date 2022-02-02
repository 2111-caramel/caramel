//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
<<<<<<< HEAD
const Weather = require('./models/Weather')
=======
const City = require('./models/City')
const PrimaryStats = require('./models/PrimaryStats')
>>>>>>> d8e2393375f6ca3390685584c742bea799d75f19

//associations could go here!
City.hasOne(PrimaryStats)
PrimaryStats.belongsTo(City)

module.exports = {
  db,
  models: {
    User,
<<<<<<< HEAD
    Weather
=======
    City,
    PrimaryStats
>>>>>>> d8e2393375f6ca3390685584c742bea799d75f19
  },
}
