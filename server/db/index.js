//this is the access point for all things database related!
const db = require("./db");

const User = require("./models/User");
const Weather = require("./models/Weather");
const City = require("./models/City");
//const City_Weather = require("./models/City_Weather");
const PrimaryStats = require("./models/PrimaryStats");
const LivingCost = require("./models/LivingCost");
const Healthcare = require("./models/Healthcare");
const Transportation = require("./models/Transportation");
const Pollution = require("./models/Pollution");

//associations could go here!
City.hasOne(PrimaryStats);
PrimaryStats.belongsTo(City);
City.hasOne(LivingCost);
LivingCost.belongsTo(City);
City.hasOne(Healthcare);
Healthcare.belongsTo(City);
City.hasOne(Transportation);
Transportation.belongsTo(City);
City.hasOne(Pollution);
Pollution.belongsTo(City);
City.hasOne(Weather);
Weather.belongsTo(City);
//City.belongsToMany(Weather, { through: City_Weather });
//Weather.belongsToMany(City, { through: City_Weather });

module.exports = {
  db,
  models: {
    User,
    Weather,
    City,
    PrimaryStats,
    LivingCost,
    Healthcare,
    Transportation,
    Pollution,
    // City_Weather,
  },
};
