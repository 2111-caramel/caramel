const router = require("express").Router();
// const {Healthcare, LivingCost, PrimaryStats, Transportation, City} = require("../db/models");
// const City = require("../db/models/City");
// const Healthcare = require("../db/models/Healthcare");
// const PrimaryStats = require("../db/models/primaryStats");
// const LivingCost = require("../db/models/LivingCost");
// const Transportation = require("../db/models/Transportation")
// const Weather = require("../db/models/Weather")
// const Pollution = require("../db/models/Pollution")

const {
  models: { City, Healthcare, PrimaryStats, LivingCost, Transportation, Weather, Pollution },
} = require("../db");


module.exports = router;

//mounted on /api/cities
router.get("/", async (req, res, next) => {
  try {
    const cities = await City.findAll({
      order: [["name", "ASC"]],
    });
    console.log("cities", cities)
    res.send(cities);
  } catch (err) {
    next(err);
  }
});

//come back and add the rest of the assosiated models
router.get("/citiesAndModels", async(req, res, next) => {
  try{
    const city = await City.findAll({
      include: [
        {model: PrimaryStats},
        {model: Healthcare},
        {model: LivingCost}
       // {model: Transportation},
       // {model: Weather}
    ]
    })
    res.send(city);
  } catch (err) {
    next(err);
  }
})

router.get("/city/:cityName", async(req, res, next) => {
  try{
    const city = await City.findOne({
      where: {
        name: req.params.cityName,
      },
      include: [
        {model: PrimaryStats},
        {model: Healthcare},
        {model: LivingCost},
        {model: Transportation},
        //{model: Weather}
    ]
    })
    res.send(city);
  } catch (err) {
    next(err);
  }
})

//come back and add the assosiated models
router.get("/:cityId", async(req, res, next) => {
  try{
    const city = await City.findOne({
      where: {
        id: req.params.cityId,
      },
      include: [
        {model: PrimaryStats},
        {model: Healthcare},
        {model: LivingCost},
        {model: Transportation},
        {model: Weather},
        {model: Pollution},
    ]
    })
    res.send(city);
  } catch (err) {
    next(err);
  }
})


