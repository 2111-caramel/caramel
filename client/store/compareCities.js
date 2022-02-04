import axios from 'axios'
import history from '../history'

const GET_COMPARE_CITY = 'GET_COMPARE_CITY'

/**
 * ACTION CREATORS
 */
const _getCompareCity = compareCity => ({type: GET_COMPARE_CITY, compareCity})

/**
 * THUNK CREATORS
 */
export const getCityByName = (cityName) => async dispatch => {
  try{
    console.log('CITYNAME IN THUNK', cityName)
    const {data: city} = await axios.get(`/api/cities/city/${cityName}`)
    //console.log(city)
    return dispatch(_getCompareCity(city))
  } catch(error){
    console.log('get single city by Name thunk error')
  }
}

/**
 * REDUCER
 */
export default function compareCityReducer (state = [], action){
  switch (action.type) {
    case GET_COMPARE_CITY:
      return [...state, action.compareCity]
    default:
      return state
  }
}
