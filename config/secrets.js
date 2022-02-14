require('dotenv').config()

module.exports = {
  jwtSecret: process.env.SECRET_JWT,
  googleSecret: process.env.SECRET_GOOGLEMAPS_KEY,
  numbeoSecret: process.env.SECRET_NUMBEO_KEY,
  weatherSecret: process.env.SECRET_WEATHER_KEY
}
