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
const Channel = require('./models/Channel')
const Message = require("./models/Message")
const { useReducer } = require("react");
//const { default: Message } = require("../../client/components/Chat/Message");

//City data associations
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

//chat associations
//Do I need to create this many to many relationship?
//User.hasMany(Channel)
//Channel.hasMany(Users)

Channel.hasMany(Message, {
  onDelete: 'cascade',
  hooks:true
})
User.hasMany(Message)
Message.belongsTo(Channel)
Message.belongsTo(User)

//Favorite associations 
User.belongsToMany(City, { through: "Favourites" });
City.belongsToMany(User, { through: "Favourites" });

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
    Channel,
    Message,
    // City_Weather,
  },
};
