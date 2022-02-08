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
      const { data: threeCities } = await axios.get(
        `/api/cities/preferences/${selection}`
      );
      console.log("THUNK AFTER--->>>", threeCities);
      dispatch(getThreeCities(threeCities));
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
