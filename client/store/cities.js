import axios from "axios";

// Action Type
const GOT_CITIES = "GOT_CITIES";

// Action Creator
const _gotCities = (cities) => ({
  type: GOT_CITIES,
  cities,
});

// Thunks
export const fetchCities = () => {
  return async (dispatch) => {
    try {
      const { data: cities } = await axios.get("/api/cities");
      dispatch(_gotCities(cities));
    } catch (err) {
      console.log(err);
    }
  };
};

// Sub-Reducer
const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GOT_CITIES:
      return action.cities;
    default:
      return state;
  }
};
