//Used to combine reducers
import { combineReducers } from "redux";
import userAuthReducer from "./userAuthReducer";
import profileReducer from "./profileReducer";
imort searchTutorReducer from "./searchTutorReducer";

// which state is produced by each reducer
export default combineReducers({
  userAuth : userAuthReducer,
  viewTutor : profileReducer,
  searchTutor: searchTutorReducer
});
