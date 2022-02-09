import axios from "axios";

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
        cityArray.push(data)
      }
      console.log('CITYARRAY', cityArray)


      //dispatch(getThreeCities(threeCities));
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
