//Used to combine reducers
import { combineReducers } from "redux";
import userAuthReducer from "./userAuthReducer";
import profileReducer from "./profileReducer";


export default combineReducers({
  userAuth : userAuthReducer,
  profile: profileReducer
});
