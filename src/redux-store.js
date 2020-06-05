import { combineReducers, createStore, compose } from "redux";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
  form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers());

export default store;
