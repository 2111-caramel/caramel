import axios from 'axios'
import history from '../history'

const GET_WEATHER = 'GET_WEATHER'
const GET_RENT_1BED = 'GET_RENT_1BED'
const GET_RENT_3BED = 'GET_RENT_3BED'
const GET_BEER = 'GET_BEER'
const GET_SALARY = 'GET_SALARY'
const GET_TRANSPORTATION = 'GET_TRANSPORTATION'
const GET_POLLUTION = 'GET_POLLUTION'
const GET_CAPPUCCINO = 'GET_CAPPUCCINO'
const GET_PUBLIC_TRANSIT = 'GET_PUBLIC_TRANSIT'
const GET_MILK = 'GET_MILK'
const GET_EGGS = 'GET_EGGS'
const GET_CINEMA = 'GET_CINEMA'
const GET_HEALTHCARE = 'GET_HEALTHCARE'
const GET_GYM = 'GET_GYM'
const GET_BREAD = 'GET_BREAD'





/**
 * ACTION CREATORS
 */
const _getCity = weather => ({type: GET_WEATHER, weather})
const _getRent1Bed = rent => ({type: GET_RENT_1BED, rent})
const _getRent3Bed = rent => ({type: GET_RENT_3BED, rent})
const _getBeer = beer => ({type: GET_BEER, beer})
const _getSalary = salary => ({type: GET_SALARY, salary})
const _getTransportation = transportation => ({type: GET_TRANSPORTATION, transportation})
const _getPollution = pollution => ({type: GET_POLLUTION , pollution})
const _getCappuccino = cappuccino => ({type: GET_CAPPUCCINO , cappuccino})
const _getPublicTransit = public_transit => ({type: GET_PUBLIC_TRANSIT , public_transit})
const _getMilk = milk => ({type: GET_MILK, milk})
const _getEggs = eggs => ({type: GET_EGGS, eggs})
const _getCinema = cinema => ({type: GET_CINEMA, cinema})
const _getHealthcare = healthcare => ({type: GET_HEALTHCARE, healthcare})
const _getGym = gym => ({type: GET_GYM, gym})
const _getBread= bread => ({type: GET_BREAD, bread})









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

export const getHealthcare = () => async dispatch => {
  try{
    //city format is + between words
    //city.replace(' ', '+')
    const res = await axios.get(`http://www.numbeo.com:8008/api/city_healthcare?api_key=mjp50q4qjekq4w&city=New%20York,%20NY&country=United%20States
    `)
    console.log(res,'HEALTHCARE')
    return dispatch(_getHealthcare(res.data))
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
    console.log('RES', res)
    dispatch(_getBeer(res.prices[3].average_price))
    dispatch(_getRent1Bed(res.prices[21].average_price))
    dispatch(_getRent3Bed(res.prices[23].average_price))
    dispatch(_getSalary(res.prices[40].average_price))
    dispatch(_getCappuccino(res.prices[49].average_price))
    dispatch(_getPublicTransit(res.prices[16].average_price))
    dispatch(_getMilk(res.prices[7].average_price))
    dispatch(_getEggs(res.prices[9].average_price))
    dispatch(_getCinema(res.prices[30].average_price))
    dispatch(_getGym(res.prices[28].average_price))
    dispatch(_getBread(res.prices[8].average_price))
  } catch(error){
    console.log('get cost of living thunk error')
  }
}


let initialState = {
  weather:{},
  rent1Bed: 0,
  rent3Bed: 0,
  beer: 0,
  salary: 0,
  transportation: {},
  pollution: {},
  cappuccino: 0,
  public_transit: 0,
  milk: 0,
  eggs: 0,
  cinema: 0,
  healthcare: {},
  gym: 0,
  bread: 0
}

/**
 * REDUCER
 */
export default function singleCityReducer (state = initialState, action){
  switch (action.type) {
    case GET_WEATHER:
      return {...state, weather: action.weather}
    case GET_RENT_1BED:
      return {...state, rent1Bed: action.rent}
    case GET_RENT_3BED:
      return {...state, rent3Bed: action.rent}
    case GET_BEER:
      return {...state, beer: action.beer}
    case GET_MILK:
      return {...state, milk: action.milk}
    case GET_BREAD:
      return {...state, bread: action.bread}
    case GET_EGGS:
      return {...state, eggs: action.eggs}
    case GET_SALARY:
      return {...state, salary: action.salary}
    case GET_TRANSPORTATION:
      return {...state, transportation: action.transportation}
    case GET_POLLUTION:
      return {...state, pollution: action.pollution}
    case GET_CAPPUCCINO:
      return {...state, cappuccino: action.cappuccino}
    case GET_PUBLIC_TRANSIT:
      return {...state, public_transit: action.public_transit}
    case GET_CINEMA:
      return {...state, cinema: action.cinema}
    case GET_HEALTHCARE:
      return {...state, healthcare: action.healthcare}
    case GET_GYM:
      return {...state, gym: action.gym}
    default:
      return state
  }
}
