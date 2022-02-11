import axios from 'axios'

//action types
const GET_USER = "GET_USER"
const UPDATE_USER = "UPDATE_USER"
const GET_PUBLIC_USER = "GET_PUBLIC_USER"

//action creators
export const getSingleUser = (user) => ({
  type: GET_USER,
  user
})

export const getPublicUser = (user) => ({
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
      console.log('HEEEEEEEY', userId)
      const {data: user } = await axios.get(`/api/users/${userId}`)
      console.log("FETCHSINGLEUSER RESULT: ", user)
      dispatch(getSingleUser(user))
    } catch (error) {
      console.log('GET SINGLE USER THUNK ERROR')
    }
  }
}

// get public profile of selected user in find users component
export const fetchPublicUser = (userId) => {
  return async (dispatch) => {
    try {
      const {data: user } = await axios.get(`/api/users/public/${userId}`)
      console.log("FETCH PUBLIC USER RESULT: ", user)
      dispatch(getPublicUser(user))
    } catch (error) {
      console.log('GET PUBLIC USER THUNK ERROR')
    }
  }
}

export const updateUser = (city, userId) => {
  return async (dispatch) => {
    try{
      console.log('UPDATE THUNK', city, userId)
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
      case GET_PUBLIC_USER:
      return action.user
    default:
      return state
  }
}
