"use strict";
const axios = require("axios");
const secretKeys = require("./apikey")
const citiesCSV = require('./Cities.csv');
const fastcsv = require("fast-csv");


const pkg = require("../package.json");

const databaseName =
  pkg.name + (process.env.NODE_ENV === "test" ? "-test" : "");

const {
  db,
  models: { User, City, PrimaryStats, Weather },
} = require("../server/db");
// const City = require("../server/db/models/City");
// const PrimaryStats = require("../server/db/models/PrimaryStats");

//Parsing the CSV into an object
// function csvToArray(str, delimiter = ",") {
//   // slice from start of text to the first \n index
//   // use split to create an array from string by delimiter
//   const headers = str.slice(0, str.indexOf("\n")).split(delimiter);

//   // slice from \n index + 1 to the end of the text
//   // use split to create an array of each csv value row
//   const rows = str.slice(str.indexOf("\n") + 1).split("\n");

//   // Map the rows
//   // split values from each row into an array
//   // use headers.reduce to create an object
//   // object properties derived from headers:values
//   // the object passed as an element of the array
//   const arr = rows.map(function (row) {
//     const values = row.split(delimiter);
//     const el = headers.reduce(function (object, header, index) {
//       object[header] = values[index];
//       return object;
//     }, {});
//     return el;
//   });

//   // return the array
//   return arr;
// }

// console.log(csvToArray(citiesCSV, delimiter))

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  //Creating cities
  let stream = fs.createReadStream("./Cities.csv");
  let csvData = [];
  let csvStream = fastcsv
    .parse()
    .on("data", function (data) {
      csvData.push(data);
    })
    .on("end", function () {
      // remove the first line: header
      csvData.shift();

      // create a new connection to the database
      let pool;

      //if connecting to heroku:
      if (process.env.NODE_ENV === "production") {
        pool = new Pool({
          connectionString: process.env.DATABASE_URL,
          ssl: {
            rejectUnauthorized: false,
          },
        });
      } else {
        pool = new Pool({
          host: "localhost",
          //user: process.env.USER,
          database: "urban_analysis",
          port: 5432,
        });
      }

      //sql query inserts data
      const query =
        "INSERT INTO cities (Id, State, City)";

      pool.connect((err, client, done) => {
        if (err) throw err;

        try {
          csvData.forEach((row) => {
            client.query(query, row, (err, res) => {
              if (err) {
                console.log(err.stack);
              } else {
                console.log("inserted " + res.rowCount + " row:", row);
              }
            });
          });
        } finally {
          done();
        }
      });
    });

  stream.pipe(csvStream);

  // Creating Users
  const users = await Promise.all([
    User.create({ username: "cody", password: "123" }),
    User.create({ username: "murphy", password: "123" }),
  ]);

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
  // creating dummy cities
  const cities = await Promise.all([
    City.create({ id: 1, name: "New York", state: "NY" }),
    City.create({ id: 2, name: "New Orleans", state: "LA" }),
    City.create({ id: 3, name: "Los Angeles", state: "CA" }),
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
