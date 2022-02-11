import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";
import cities from "./cities";
import singleCityReducer from "./singleCity";
import compareCityReducer from "./compareCities";
import threeCitiesReducer from "./threeCities";
import userReducer from "./user";
import weather from "./weather";
<<<<<<< HEAD
import chatReducer from "./chat"
=======
import users from "./users"
>>>>>>> main

const reducer = combineReducers({
  auth,
  singleCity: singleCityReducer,
  threeCities: threeCitiesReducer,
  cities,
  compareCity: compareCityReducer,
  user: userReducer,
  weather,
<<<<<<< HEAD
  messages: chatReducer,
=======
  users
>>>>>>> main
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
