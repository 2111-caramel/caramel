import axios from 'axios'

//action types
const GOT_USERS_BY_CITY = "GOT_USERS_BY_CITY"

//action creators
export const getUsersByCity = (users) => ({
  type: GOT_USERS_BY_CITY,
  users
})

//thunks
export const fetchUsersByCity = (cityName) => {
  return async (dispatch) => {
    try {
      const { data: users } = await axios.get(`/api/users/cityusers/${cityName}`)
      dispatch(getUsersByCity(users))
    } catch (error) {
      console.log('GET USERS BY CITY THUNK ERROR')
    }
  }
}

//reducers
const initialState = []

export default (state = initialState, action) => {
  switch (action.type){
    case GOT_USERS_BY_CITY:
      return action.users
    default:
      return state
  }
}
