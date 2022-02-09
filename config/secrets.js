require('dotenv').config()

module.exports = {
  jwtSecret: process.env.JWT_SECRET,
  googleSecret: process.env.SECRET_GOOGLEMAPS_KEY,
  numbeoSecret: process.env.SECRET_NUMBEO_KEY,
  weatherSecret: process.env.SECRET_WEATHER_KEY
}
