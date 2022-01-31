import axios from 'axios'
import history from '../history'

const GET_WEATHER = 'GET_WEATHER'
const GET_RENT = 'GET_RENT'
const GET_BEER = 'GET_BEER'
const GET_SALARY = 'GET_SALARY'
const GET_TRANSPORTATION = 'GET_TRANSPORTATION'
const GET_POLLUTION = 'GET_POLLUTION'



/**
 * ACTION CREATORS
 */
const _getCity = weather => ({type: GET_WEATHER, weather})
const _getRent = rent => ({type: GET_RENT, rent})
const _getBeer = beer => ({type: GET_BEER, beer})
const _getSalary = salary => ({type: GET_SALARY, salary})
const _getTransportation = transportation => ({type: GET_TRANSPORTATION, transportation})
const _getPollution = pollution => ({type: GET_POLLUTION , pollution})




/**
 * THUNK CREATORS
 */
export const getWeather = () => async dispatch => {
  try{
    //city format is + between words
    //city.replace(' ', '+')
    const res = await axios.get(`https://api.worldweatheronline.com/premium/v1/weather.ashx?key=2d655123ca6d4c0094f172122222801&q=New+York&fx=no&cc=no&mca=yes&format=json`)
    return dispatch(_getCity(res.data.data.ClimateAverages[0]))
  } catch(error){
    console.log('get weather thunk error')
  }
}

export const getPollution = () => async dispatch => {
  try{
  //city format is + between words
    //city.replace(' ', '+')
    const res = await axios.get(`http://www.numbeo.com:8008/api/city_pollution?api_key=mjp50q4qjekq4w&city=New%20York,%20NY&country=United%20States`)
    return dispatch(_getPollution(res.data))
  } catch(error){
    console.log('get pollution thunk error')
  }
}


export const getTransportation = () => async dispatch => {
  try{
  //city format is space between words
    const { data: res } = await axios.get(`http://www.numbeo.com:8008/api/city_traffic?api_key=mjp50q4qjekq4w&city=New%20York,%20NY&country=United%20States`)
    dispatch(_getTransportation(res.primary_means_percentage_map))
  } catch(error){
    console.log('get transportation thunk error')
  }
}


export const getCostOfLiving = () => async dispatch => {
  try{
  //city format is space between words
    const { data: res } = await axios.get(`http://www.numbeo.com:8008/api/city_prices?api_key=mjp50q4qjekq4w&city=New%20York,%20NY&country=United%20States`)
    dispatch(_getBeer(res.prices[3].average_price))
    dispatch(_getRent(res.prices[21].average_price))
    dispatch(_getSalary(res.prices[40].average_price))
  } catch(error){
    console.log('get cost of living thunk error')
  }
}


let initialState = {
  weather:{},
  rent: 0,
  beer: 0,
  salary: 0,
  transportation: {},
  pollution: {}
}

/**
 * REDUCER
 */
export default function singleCityReducer (state = initialState, action){
  switch (action.type) {
    case GET_WEATHER:
      return {...state, weather: action.weather}
    case GET_RENT:
      return {...state, rent: action.rent}
    case GET_BEER:
      return {...state, beer: action.beer}
    case GET_SALARY:
      return {...state, salary: action.salary}
    case GET_TRANSPORTATION:
      return {...state, transportation: action.transportation}
    case GET_POLLUTION:
      return {...state, pollution: action.pollution}
    default:
      return state
  }
}
