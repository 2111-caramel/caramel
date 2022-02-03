"use strict";
const axios = require("axios");
const secretKeys = require("./apikey")
<<<<<<< HEAD
const fastcsv = require("fast-csv");
=======
//const fastcsv = require("fast-csv");
>>>>>>> main
const cityObj = require("./cityObj")
const pkg = require("../package.json");

// const databaseName =
//   pkg.name + (process.env.NODE_ENV === "test" ? "-test" : "");

const {
  db,
  models: { User, City, PrimaryStats, Weather },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all([
    User.create({ username: "cody", password: "123" }),
    User.create({ username: "murphy", password: "123" }),
  ]);

  //console.log("secret numbeo key***", secretKeys)

  const { data: newYork } = await axios.get(
    `http://www.numbeo.com:8008/api/city_prices?api_key=${secretKeys.SECRET_NUMBEO_KEY}&city=New%20York,%20NY&country=United%20States`
  );
  const { data: newOrleans } = await axios.get(
    `http://www.numbeo.com:8008/api/city_prices?api_key=${secretKeys.SECRET_NUMBEO_KEY}&city=New%20Orleans,%20LA&country=United%20States`
  );
  const { data: losAngeles } = await axios.get(
    `http://www.numbeo.com:8008/api/city_prices?api_key=${secretKeys.SECRET_NUMBEO_KEY}&city=Los%20Angeles,%20CA&country=United%20States`
  );

//console.log("NEW YORK*** ", newYork)
  // populating the city model
  const cities = await Promise.all([
    cityObj.map(city => {
      return City.create(city)
    })
  ]);

  const primaryStats = await Promise.all([
    PrimaryStats.create({
      cityId: 1,
      rent1br: Math.round(newYork.prices[21].average_price),
      rent3br: Math.round(newYork.prices[23].average_price),
      housePrice: Math.round(newYork.prices[36].average_price),
      salary: Math.round(newYork.prices[40].average_price),
    }),
    PrimaryStats.create({
      cityId: 2,
      rent1br: Math.round(newOrleans.prices[21].average_price),
      rent3br: Math.round(newOrleans.prices[23].average_price),
      housePrice: Math.round(newOrleans.prices[36].average_price),
      salary: Math.round(newOrleans.prices[40].average_price),
    }),
    PrimaryStats.create({
      cityId: 3,
      rent1br: Math.round(losAngeles.prices[21].average_price),
      rent3br: Math.round(losAngeles.prices[23].average_price),
      housePrice: Math.round(losAngeles.prices[36].average_price),
      salary: Math.round(losAngeles.prices[40].average_price),
    }),
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
  };
}

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
