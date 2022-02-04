"use strict";
const axios = require("axios");
const secretKeys = require("./apiKey");
const cityNameFormats = require("./cityObjs");
const {
  db,
  models: {
    User,
    City,
    PrimaryStats,
    LivingCost,
    Healthcare,
    Transportation,
    Pollution,
    Weather,
  },
} = require("../server/db");
const { newCitiesObj } = require("./cityObjs");

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(
      cityNameFormats.newCitiesObj.map((city) => {
        return City.create(city);
      })
    );

    // Creating Users
    await Promise.all([
      User.create({ username: "cody", password: "123" }),
      User.create({ username: "murphy", password: "123" }),
    ]);
    ///--------------------------------COST OF LIVING------------------------------------///
    //Helper function for replacing city names in url slugs for city prices
    const urlsPrice = async (partialCitySlug) => {
      const { data: cityName } = await axios.get(
        `http://www.numbeo.com:8008/api/city_prices?api_key=${secretKeys.SECRET_NUMBEO_KEY}&city=${partialCitySlug}&country=United%20States`
      );
      return cityName;
    };

    //Adding data for average price for each city
    let counterPrice = 0;
    while (counterPrice < cityNameFormats.cityNameSlugs.cities.length) {
      let eachCityStats = await urlsPrice(
        cityNameFormats.cityNameSlugs.cities[counterPrice]
      );
      await PrimaryStats.create({
        cityId: counterPrice + 1,
        rent1br: Math.round(eachCityStats.prices[21].average_price),
        rent3br: Math.round(eachCityStats.prices[23].average_price),
        housePrice: Math.round(eachCityStats.prices[36].average_price),
        salary: Math.round(eachCityStats.prices[40].average_price),
      });

      await LivingCost.create({
        cityId: counterPrice + 1,
        daycare: Math.round(eachCityStats.prices[37].average_price),
        beer: Math.round(eachCityStats.prices[3].average_price),
        cappuccino: Math.round(eachCityStats.prices[49].average_price),
        milk: Math.round(eachCityStats.prices[7].average_price),
        bread: Math.round(eachCityStats.prices[8].average_price),
        eggs: Math.round(eachCityStats.prices[9].average_price),
        gas: Math.round(eachCityStats.prices[19].average_price),
      });

      counterPrice++;
    }
    ///--------------------------------HEALTHCARE------------------------------------///
    //Helper function for replacing city names in url slugs for city prices
    const urlsHealth = async (partialCitySlug) => {
      const { data: cityHealth } = await axios.get(
        `http://www.numbeo.com:8008/api/city_healthcare?api_key=${secretKeys.SECRET_NUMBEO_KEY}&city=${partialCitySlug}&country=United%20States`
      );
      return cityHealth;
    };
    //Adding data for health for each city
    let counterHealth = 0;
    while (counterHealth < cityNameFormats.cityNameSlugs.cities.length) {
      let eachCityHealthStats = await urlsHealth(
        cityNameFormats.cityNameSlugs.cities[counterHealth]
      );
      await Healthcare.create({
        cityId: counterHealth + 1,
        cost: eachCityHealthStats.cost,
        skill: eachCityHealthStats.skill_and_competency,
        index: eachCityHealthStats.index_healthcare,
      });

      counterHealth++;
    }
    ///--------------------------------TRAFFIC------------------------------------///
    //Helper function for replacing city names in url slugs for city traffic
    const urlsTransit = async (partialCitySlug) => {
      const { data: cityTransit } = await axios.get(
        `http://www.numbeo.com:8008/api/city_traffic?api_key=${secretKeys.SECRET_NUMBEO_KEY}&city=${partialCitySlug}&country=United%20States`
      );
      return cityTransit;
    };

    //Adding data for traffic for each city
    let counterTransit = 0;
    while (counterTransit < cityNameFormats.cityNameSlugs.cities.length) {
      let eachCityTransitStats = await urlsTransit(
        cityNameFormats.cityNameSlugs.cities[counterTransit]
      );

      await Transportation.create({
        cityId: counterTransit + 1,
        car: eachCityTransitStats.primary_means_percentage_map.Car,
        workFromHome:
          eachCityTransitStats.primary_means_percentage_map[
            "Working from Home"
          ],
        train: eachCityTransitStats.primary_means_percentage_map["Train/Metro"],
        bike: eachCityTransitStats.primary_means_percentage_map.Bike,
        walking: eachCityTransitStats.primary_means_percentage_map["Walking"],
        bus: eachCityTransitStats.primary_means_percentage_map[
          "Bus/Trolleybus"
        ],
        motorbike:
          eachCityTransitStats.primary_means_percentage_map["Motorbike"],
      });

      counterTransit++;
    }
    ///--------------------------------POLLUTION------------------------------------///
    //Helper function for replacing city names in url slugs for city pollution
    const urlsPollution = async (partialCitySlug) => {
      const { data: cityPollution } = await axios.get(
        `http://www.numbeo.com:8008/api/city_pollution?api_key=${secretKeys.SECRET_NUMBEO_KEY}&city=${partialCitySlug}&country=United%20States`
      );
      return cityPollution;
    };

    //Adding data for pollution for each city
    let counterPollution = 0;
    while (counterPollution < cityNameFormats.cityNameSlugs.cities.length) {
      let eachCityPollutionStats = await urlsPollution(
        cityNameFormats.cityNameSlugs.cities[counterPollution]
      );

      //console.log("Pollution OBJ--------->>>", eachCityPollutionStats);
      await Pollution.create({
        cityId: counterPollution + 1,
        drinkingWaterQuality:
          eachCityPollutionStats.drinking_water_quality_accessibility,
        cleanliness: eachCityPollutionStats.clean_and_tidy,
        indexPollution: eachCityPollutionStats.index_pollution,
        airQuality: eachCityPollutionStats.air_quality,
        greenParksQuality: eachCityPollutionStats.green_and_parks_quality,
      });

      counterPollution++;
    }
    ///--------------------------------WEATHER------------------------------------///
    //Helper function for replacing city names in url slugs for city weather
    const urlsWeather = async (partialCitySlug) => {
      const { data: cityWeather } = await axios.get(
        `https://api.worldweatheronline.com/premium/v1/weather.ashx?key=${secretKeys.SECRET_WEATHER_KEY}&q=${partialCitySlug}&fx=no&cc=no&mca=yes&format=json`
      );
      return cityWeather;
    };
    // console.log(cityNameFormats.newCitiesObj);
    let citySlugsWeather = [];
    cityNameFormats.newCitiesObj.forEach((cityObj) => {
      let regex = /^(\w+)( \w+)*$/;
      if (regex.test(cityObj.name)) {
        let buildPartialSlug = cityObj.name.split(" ").join("+");
        citySlugsWeather.push(buildPartialSlug);
      } else {
        citySlugsWeather.push(cityObj.name);
      }
    });

    console.log(citySlugsWeather);

    //Adding data for weather for each city
    let counterWeather = 0;
    while (counterWeather <= cityNameFormats.cityNameSlugs.cities.length) {
      let eachCityWeatherStats = await urlsWeather(
        citySlugsWeather[counterWeather]
      );

      console.log("COUNT----->>", counterWeather);

      console.log("Each City--------->>>>", eachCityWeatherStats);
      if (eachCityWeatherStats.data.error) {
        break;
      }
      eachCityWeatherStats.data.ClimateAverages[0].month.map(
        async (eachMonth) => {
          await Weather.create({
            cityId: counterWeather + 1,
            month: eachMonth.name,
            avgMinTemp: eachMonth.avgMinTemp_F,
            avgMaxTemp: eachMonth.absMaxTemp_F,
            avgDailyRainfall: eachMonth.avgDailyRainfall,
          });
        }
      );

      counterWeather++;
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
