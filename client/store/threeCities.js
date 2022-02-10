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
  console.log("THUNK BEFORE---->>>", selection);
  return async (dispatch) => {
    try {
      //for loop here over the state values
      const cityArray = [];

      for(let i = 0; i < selection.length; i++){
        const { data } = await axios.get(`/api/cities/preferences/${selection[i]}`)

        //EVEN OUT THE INDEXES
        if(selection[i] === "Healthcare"){
          for(let i = 0; i < data.length; i++){
            data[i].index = -Math.abs(data[i].index) * 35
          }
        }
        if(selection[i] === "Pollution"){
          for(let i = 0; i < data.length; i++){
            data[i].index = data[i].index * 50;
          }
        }
        if(selection[i] === "Daycare"){
          for(let i = 0; i < data.length; i++){
            data[i].index = data[i].index * 1.3;
          }
        }
        if(selection[i] === "Transportation"){
          for(let i = 0; i < data.length; i++){
            data[i].index = -Math.abs(data[i].index) * 35
          }
        }
        cityArray.push(data)
      }
      console.log('CITYARRAY', cityArray)
      console.log('BEST CITIES', getBest3(cityArray));
      console.log('CITYARRAY AFTER FUNC', cityArray)
      let bestCities = getBest3(cityArray).slice(0, 3);
      console.log('RESULT',bestCities)
      let result = [];
      for(let i = 0; i < cityArray[0].length; i++){
        for(let j = 0; j < 3; j++)
        if(cityArray[0][i].cityId === bestCities[j][0]){
          result.push(cityArray[0][i])
        }
      }
      console.log('i dont think this works', result)



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
