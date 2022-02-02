"use strict";
const axios = require("axios");
const secretKeys = require("./apiKey");

const {
  db,
  models: { User, City, PrimaryStats },
} = require("../server/db");

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all([
      City.create({ id: 1, name: "New York", state: "NY" }),
      City.create({ id: 2, name: "New Orleans", state: "LA" }),
      City.create({ id: 3, name: "Los Angeles", state: "CA" }),
    ]);

    // Creating Users
    await Promise.all([
      User.create({ username: "cody", password: "123" }),
      User.create({ username: "murphy", password: "123" }),
    ]);

    const cityNames = {
      cities: ["New%20York,%20NY", "Chicago,%20IL", "New%20Orleans,%20LA"],
    };

    const urls = async (partialCitySlug) => {
      const { data: cityName } = await axios.get(
        `http://www.numbeo.com:8008/api/city_prices?api_key=${secretKeys.SECRET_NUMBEO_KEY}&city=${partialCitySlug}&country=United%20States`
      );
      return cityName;
    };

    let counter = 0;
    while (counter < cityNames.cities.length) {
      let eachCityStats = await urls(cityNames.cities[counter]);

      await PrimaryStats.create({
        cityId: counter + 1,
        rent1br: Math.round(eachCityStats.prices[21].average_price),
        rent3br: Math.round(eachCityStats.prices[23].average_price),
        housePrice: Math.round(eachCityStats.prices[36].average_price),
        salary: Math.round(eachCityStats.prices[40].average_price),
      });
      // })
      // );
      counter++;
    }
  } catch (err) {
    console.log(err);
  }
};

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
