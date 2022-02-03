const router = require("express").Router();
const City = require("../db/models/City");
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
