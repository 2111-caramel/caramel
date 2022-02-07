const router = require("express").Router();
//const {Healthcare, LivingCost, PrimaryStats, Transportation, City} = require("../db/models");
const City = require("../db/models/City");
const Healthcare = require("../db/models/Healthcare");
const PrimaryStats = require("../db/models/primaryStats");
const LivingCost = require("../db/models/LivingCost");
const Pollution = require("../db/models/Pollution");

const Transportation = require("../db/models/Transportation");
const Weather = require("../db/models/weather");

module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const cities = await City.findAll({
      order: [["name", "ASC"]],
    });

    res.send(cities);
  } catch (err) {
    next(err);
  }
});

//come back and add the rest of the assosiated models
router.get("/citiesAndModels", async (req, res, next) => {
  try {
    const city = await City.findAll({
      include: [
        { model: PrimaryStats },
        { model: Healthcare },
        { model: LivingCost },
        { model: Transportation },
        // {model: Weather}
      ],
    });
    res.send(city);
  } catch (err) {
    next(err);
  }
});
///THREE CITIES
router.get("/preferences/:model", async (req, res, next) => {
  try {
    console.log("IN ROUTER BODY-------->>>>>>");
    const city = await req.params.model.findAll(
    //   order: ['index', 'ASC'],
    //   attributes: ['index', 'cityId'],
    //   limit: 3
    //     //index: req.params.model,
    //   ,
    // include: [{model: City}]
    //   include: [
    //     { model: PrimaryStats },
    //     { model: Healthcare },
    //     { model: LivingCost },
    //     { model: Transportation },
    //     { model: Weather },
    //     { model: Pollution },
    //   ],
     );
     res.send("HELLO");
  } catch (err) {
    next(err);
  }
});

//come back and add the assosiated models
router.get("/:cityId", async (req, res, next) => {
  try {
    const city = await City.findAll({
      where: {
        id: req.params.cityId,
      },
      include: [
        { model: PrimaryStats },
        { model: Healthcare },
        { model: LivingCost },
        { model: Transportation },
        { model: Weather },
        { model: Pollution },
      ],
    });
    res.send(city);
  } catch (err) {
    next(err);
  }
});
