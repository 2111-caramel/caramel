import axios from "axios";
import { getBest3 } from './formFunction';

// Action Type
const GET_THREE_CITIES = "GET_THREE_CITIES";

// Action Creator
const getThreeCities = (threeCities) => ({
  type: GET_THREE_CITIES,
  threeCities,
});

// Thunks
export const fetchThreeCities = (selection) => {
  return async (dispatch) => {
    try {
      const cityArray = [];

      for(let i = 0; i < selection.length; i++){
        const { data } = await axios.get(`/api/cities/preferences/${selection[i]}`)
        cityArray.push(data)
      }

      let bestCities = getBest3(cityArray);

      //find the data on the best 3 cities from cityArray
      let result = [];

      for(let i = 0; i < cityArray[0].length; i++){
        for(let j = 0; j < bestCities.length; j++){
          let cityData = cityArray[0][i];
          let bestCityId = bestCities[j][0];

          if(cityData.cityId === bestCityId){
            result.push(cityData)
          }
        }
      }
      dispatch(getThreeCities(result));
    } catch (err) {
      console.log(err);
    }
  };
};

// Sub-Reducer
const initialState = [];

export default function threeCitiesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_THREE_CITIES:
      return action.threeCities;
    default:
      return state;
  }
}
