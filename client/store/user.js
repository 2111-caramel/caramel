import axios from 'axios'

//action types
const GET_USER = "GET_USER"
const UPDATE_USER = "UPDATE_USER"

//action creators
export const getSingleUser = (user) => ({
  type: GET_USER,
  user
})

const _updateUser = (user) => {
  return {
    type: UPDATE_USER,
    user
  }
}

//thunks
export const fetchSingleUser = (userId) => {
  return async (dispatch) => {
    try {
      //const token = window.localStorage.getItem('token')
      const {data: user } = await axios.get(`/api/users/${userId}`)
      dispatch(getSingleUser(user))
    } catch (error) {
      console.log('GET SINGLE USER THUNK ERROR')
    }
  }
}

export const updateUser = (city, userId) => {
  return async (dispatch) => {
    try{
      const user = {favorites: city}
      const {data: updatedUser} = await axios.put(`/api/users/${userId}`, user)
      dispatch(_updateUser(updatedUser))
    }
    catch (err) {
      console.log('updateUser thunk error!', err)
    }
  }
}

export const favoriteCity = (cityId, userId) => {
  return async (dispatch) => {
    try{
      const {data: updatedUser} = await axios.post(`/api/users/${userId}`, {cityId})
      dispatch(_updateUser(updatedUser))
    }
    catch (err) {
      console.log('updateUser thunk error!', err)
    }
  }
}

//reducers
const initialState = {}

export default function userReducer(state = initialState, action) {
  switch (action.type){
    case GET_USER:
      return action.user
    case UPDATE_USER:
      return action.user
    default:
      return state
  }
}
