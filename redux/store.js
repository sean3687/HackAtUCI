import filterReducer from "./filterReducer"

const rootReducer = combineReducers({
    filterReducer,
  })
  
const store = createStore(rootReducer);

export default store;