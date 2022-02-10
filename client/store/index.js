import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";
import cities from "./cities";
import singleCityReducer from "./singleCity";
import compareCityReducer from "./compareCities";
import threeCitiesReducer from "./threeCitties";
import userReducer from "./user";
import weather from "./weather";
import chatReducer from "./chat"

const reducer = combineReducers({
  auth,
  singleCity: singleCityReducer,
  threeCities: threeCitiesReducer,
  cities,
  compareCity: compareCityReducer,
  user: userReducer,
  weather,
  messages: chatReducer,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
