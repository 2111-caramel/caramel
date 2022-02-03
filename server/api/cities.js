const router = require("express").Router();
//const {Healthcare, LivingCost, PrimaryStats, Transportation} = require("../db/models");
const City = require("../db/models/City");
const Healthcare = require("../db/models/Healthcare");
const PrimaryStats = require("../db/models/primaryStats");

module.exports = router;

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
      include: {
        model: PrimaryStats, 
      }
    })
    res.send(city);
  } catch (err) {
    next(err);
  }
})

//come back and add the assosiated models
router.get("/:cityId", async(req, res, next) => {
  try{
    const city = await City.findAll({
      where: {
        id: req.params.cityId,
      },
      include: {
        model: PrimaryStats
      }
    })
    res.send(city);
  } catch (err) {
    next(err);
  }
})
