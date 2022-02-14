const router = require("express").Router();
const {
  models: { User, City },
} = require("../db");

const { requireToken } = require("./gatekeepingMiddleware");
module.exports = router;

//GET: all users api/users/
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ["id", "username"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// find users by city name
router.get("/cityusers/:cityName", async (req, res, next) => {
  try {
    const users = await User.findAll({
      where: {
        currentCity: req.params.cityName,
      },
    });
    console.log("USERS FROM API:", users);
    res.json(users);
  } catch (err) {
    next(err);
  }
});

//GET: single user && favorite city if any  api/users/:userId
router.get("/:userId", async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.userId,
      },
      include: {
        model: City,
      },
    });

    if (!user) {
      res.status(404).send("Sorry this user does not exist!");
    } else {
      res.json(user);
    }
  } catch (err) {
    next(err);
  }
});

// get public profile of selected user in find users component
router.get("/public/:userId", async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.userId,
      },
      attributes: ["username", "interests", "currentCity"],
    });
    res.json(user);
  } catch (err) {
    next(err);
  }
});

//Update a user to api/users/:userId
router.put("/:userId", async (req, res, next) => {
  try {
    const id = req.params.userId;
    const user = await User.findByPk(id);
    const updated = await user.update(req.body);
    res.send(updated);
  } catch (error) {
    next(error);
  }
});

//Add a new favorite city to a user to api/users/
router.post("/:userId", async (req, res, next) => {
  try {
    const { cityId } = req.body;
    const user = await User.findByPk(req.params.userId);
    const city = await City.findByPk(cityId);
    user.addCity(city);
    res.status(201).send(user);
  } catch (error) {
    next(error);
  }
});
