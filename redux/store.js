import filterReducer from "./filterReducer"
import { combineReducers,createStore } from "redux";

const rootReducer = combineReducers({
    filterReducer,
  })
  
const store = createStore(rootReducer);

export default store;