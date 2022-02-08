const router = require("express").Router();

const {
  models: {
    City,
    Healthcare,
    PrimaryStats,
    LivingCost,
    Transportation,
    Weather,
    Pollution,
  },
} = require("../db");

module.exports = router;

//mounted on /api/cities
router.get("/", async (req, res, next) => {
  try {
    const cities = await City.findAll({
      order: [["name", "ASC"]],
    });
    console.log("cities", cities);
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
    let splitWeatherWords =
      req.params.model === "Weather-warm" || "Weather-snow"
        ? req.params.model.split("-")
        : "ERROR IN WEATHER SPLIT";
    let modelName =
      req.params.model === "Healthcare"
        ? Healthcare
        : req.params.model === "Pollution"
        ? Pollution
        : req.params.model === "Transportation"
        ? Transportation
        : req.params.model === "LivingCost"
        ? LivingCost
        : splitWeatherWords[0] === "Weather"
        ? Weather
        : "NO MODEL ERROR";
    // let modelName = Healthcare
    let modelAttr =
      req.params.model === "Healthcare"
        ? ["index", "cityId"]
        : req.params.model === "Pollution"
        ? ["indexPollution", "cityId"]
        : req.params.model === "Transportation"
        ? ["train", "bus", "trainAndBus"]
        : req.params.model === "LivingCost"
        ? ["daycare"]
        : splitWeatherWords[1] === "snow"
        ? ["avgMinTemp", "month"]
        : "NO ATTR ERROR";

    let modelOrder =
      req.params.model === "Healthcare"
        ? [["index", "DESC"]]
        : req.params.model === "Pollution"
        ? [["indexPollution", "DESC"]]
        : req.params.model === "Transportation"
        ? [["trainAndBus", "DESC"]]
        : req.params.model === "LivingCost"
        ? [["daycare", "ASC"]]
        : splitWeatherWords[1] === "snow"
        ? [["avgMinTemp", "ASC"]]
        : "NO ORDER ERROR";

    let modelWhere =
      splitWeatherWords[1] === "snow" ? { month: "January" } : "";
    console.log("IN ROUTER BODY MODEL NAME-------->>>>>>", modelName);
    console.log("IN ROUTER BODY MODEL ATTR----->>>>>>", modelAttr);

    const threeCities = await modelName.findAll({
      where: modelWhere,
      attributes: modelAttr,
      order: modelOrder,
      limit: 3,
      include: [{ model: City }],
      //   include: [
      //     { model: PrimaryStats },
      //     { model: Healthcare },
      //     { model: LivingCost },
      //     { model: Transportation },
      //     { model: Weather },
      //     { model: Pollution },
      //   ],
    });
    res.send(threeCities);
  } catch (err) {
    next(err);
  }
});

router.get("/city/:cityName", async (req, res, next) => {
  try {
    const city = await City.findOne({
      where: {
        name: req.params.cityName,
      },
      include: [
        { model: PrimaryStats },
        { model: Healthcare },
        { model: LivingCost },
        { model: Transportation },
        { model: Pollution },
        //{model: Weather}
      ],
    });
    res.send(city);
  } catch (err) {
    next(err);
  }
});

router.get("/:cityId/weather", async (req, res, next) => {
  try {
    console.log("SENDING WEATHER FROM API: ");
    const city = await Weather.findAll({
      where: {
        cityId: req.params.cityId,
      },
    });
    console.log("SENDING WEATHER FROM API: ", city);
    res.send(city);
  } catch (err) {
    next(err);
  }
});

//come back and add the assosiated models

router.get("/:cityId", async (req, res, next) => {
  try {
    const city = await City.findOne({
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
