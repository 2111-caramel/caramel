import axios from "axios";
import history from "../history";

const GET_CITY = "GET_CITY";

/**
 * ACTION CREATORS
 */
const _getCity = (city) => ({ type: GET_CITY, city });

/**
 * THUNK CREATORS
 */
export const getCity = (cityId) => async (dispatch) => {
  try {
    const { data: city } = await axios.get(`/api/cities/cityById/${cityId}`);
    return dispatch(_getCity(city));
  } catch (error) {
    console.log("get single city thunk error");
  }
};

export const getCityByName = (cityName) => async (dispatch) => {
  try {
    const { data: city } = await axios.get(`/api/cities/city/${cityName}`);
    return dispatch(_getCity(city));
  } catch (error) {
    console.log("get single city by Name thunk error");
  }
};



/**
 * REDUCER
 */
export default function singleCityReducer(state = {}, action) {
  switch (action.type) {
    case GET_CITY:
      return action.city;
    default:
      return state;
  }
}
