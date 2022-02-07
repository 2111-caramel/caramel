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

//mounted on /api/cities
router.get("/", async (req, res, next) => {
  try {
    console.log("GET ALL")
    const cities = await City.findAll({
      order: [["name", "ASC"]],
    });

    res.send(cities);
  } catch (err) {
    next(err);
  }
});

// //come back and add the rest of the assosiated models
// router.get("/citiesAndModels", async (req, res, next) => {
//   try {
//     const city = await City.findAll({
//       include: [
//         { model: PrimaryStats },
//         { model: Healthcare },
//         { model: LivingCost },
//         { model: Transportation },
//         // {model: Weather}
//       ],
//     });
//     res.send(city);
//   } catch (err) {
//     next(err);
//   }
// });

///THREE CITIES
router.get("/preferences/:model", async (req, res, next) => {
  try {
    let modelName = req.params.model === "Healthcare" ? Healthcare : req.params.model === "Pollution" ? Pollution : req.params.model === "Transportation" ? Transportation : req.params.model === "LivingCost" ? LivingCost : "NO MODEL ERROR"
   // let modelName = Healthcare
   let modelAttr = req.params.model === "Healthcare" ? ['index', 'cityId'] : req.params.model === "Pollution" ? ['indexPollution', 'cityId'] : req.params.model === "Transportation" ? ['train', 'bus'] : req.params.model === "LivingCost" ? ['daycare'] : "NO ATTR ERROR"

   let modelOrder = req.params.model === "Healthcare" ? [['index', 'DESC']] : req.params.model === "Pollution" ? [['indexPollution', 'DESC']] : req.params.model === "Transportation" ? [['train', 'DESC'],['bus', 'DESC']] : req.params.model === "LivingCost" ? [['daycare', 'ASC']]: "NO ORDER ERROR"
    console.log("IN ROUTER BODY MODEL NAME-------->>>>>>", modelName);
    console.log("IN ROUTER BODY MODEL ATTR----->>>>>>", modelAttr)

    const threeCities= await modelName.findAll({
     
      attributes: modelAttr, 
      order: modelOrder,
      limit: 3,
    include: [{model: City}]
    //   include: [
    //     { model: PrimaryStats },
    //     { model: Healthcare },
    //     { model: LivingCost },
    //     { model: Transportation },
    //     { model: Weather },
    //     { model: Pollution },
    //   ],
     } );
     res.send(threeCities)
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
router.get("/:cityId", async (req, res, next) => {
  try {
    const city = await City.findAll({
      where: {
        id: req.params.cityId,
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

