import axios from "axios";

const GET_CITY_WEATHER = "GET_CITY_WEATHER";

const _getCityWeather = (weather) => ({ type: GET_CITY_WEATHER, weather})

export const getCityWeather = (cityId) => async (dispatch) => {
    try {
      const {data: weather} = await axios.get(`/api/cities/${cityId}/weather`);
      return dispatch(_getCityWeather(weather));
    } catch (error) {
      console.log("get city weather thunk error");
    }
  };

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CITY_WEATHER:
      return action.weather;
    default:
      return state;
  }
};
