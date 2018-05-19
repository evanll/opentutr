//Used to combine reducers
import { combineReducers } from "redux";
import userAuthReducer from "./userAuthReducer";


export default combineReducers({
  userAuth : userAuthReducer
});
