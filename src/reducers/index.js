import { combineReducers } from "redux";
import { cartReducer, totalReducer } from "./reducer";

const reducers = combineReducers({
  cartReducer,
  totalReducer,
});

export default reducers;
