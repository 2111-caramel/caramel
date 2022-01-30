import axios from 'axios'
import history from '../history'

const GET_WEATHER = 'GET_WEATHER'


/**
 * ACTION CREATORS
 */
const _getCity = weather => ({type: GET_WEATHER, weather})

/**
 * THUNK CREATORS
 */
export const getWeather = () => async dispatch => {

  try{
  //city format is + between words
    //city.replace(' ', '+')
    console.log('HIIII')
    const res = await axios.get(`https://api.worldweatheronline.com/premium/v1/weather.ashx?key=2d655123ca6d4c0094f172122222801&q=New+York&fx=no&cc=no&mca=yes&format=json`)
    console.log('HELLO', res.data.data)
    return dispatch(_getCity(res.data.data.ClimateAverages[0]))
  } catch(error){
    console.log('get weather thunk error')
  }

}



/**
 * REDUCER
 */
export default function singleCityReducer (state = {}, action){
  switch (action.type) {
    case GET_WEATHER:
      return action.weather
    default:
      return state
  }
}
