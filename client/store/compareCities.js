import axios from 'axios'
import history from '../history'

const GET_CITY1 = 'GET_CITY1'
const GET_CITY2 = 'GET_CITY2'
const GET_CITY3 = 'GET_CITY3'


/**
 * ACTION CREATORS
 */
const _getCompareCity1 = compareCity => ({type: GET_CITY1, compareCity})
const _getCompareCity2 = compareCity => ({type: GET_CITY2, compareCity})
const _getCompareCity3 = compareCity => ({type: GET_CITY3, compareCity})

/**
 * THUNK CREATORS
 */
export const getCityByName1 = (cityName) => async dispatch => {
  try{
    const {data: city} = await axios.get(`/api/cities/${cityName}`)
    return dispatch(_getCompareCity1(city))
  } catch(error){
    console.log('get single city by Name thunk error')
  }
}

export const getCityByName2 = (cityName) => async dispatch => {
  try{
    const {data: city} = await axios.get(`/api/cities/${cityName}`)
    return dispatch(_getCompareCity2(city))
  } catch(error){
    console.log('get single city by Name thunk error')
  }
}

export const getCityByName3 = (cityName) => async dispatch => {
  try{
    console.log('CITYNAME IN THUNK', cityName)
    const {data: city} = await axios.get(`/api/cities/${cityName}`)
    //console.log(city)
    return dispatch(_getCompareCity3(city))
  } catch(error){
    console.log('get single city by Name thunk error')
  }
}
let initialState = {
  city1: {},
  city2: {},
  city3: {},
}
/**
 * REDUCER
 */
export default function compareCityReducer (state = initialState, action){
  switch (action.type) {
    case GET_CITY1:
      return {...state, city1: action.compareCity}
    case GET_CITY2:
      return {...state, city2: action.compareCity}
    case GET_CITY3:
      return {...state, city3: action.compareCity}
    default:
      return state
  }
}
