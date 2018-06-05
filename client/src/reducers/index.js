/* Written by
 * Evan Lalopoulos <evan.lalopoulos.2017@my.bristol.ac.uk>
 * Harrison Boyns <hb17757.2017@my.bristol.ac.uk>
 * A project for Web Technologies
 * University of Bristol, May 2018
 * Copyright (C) - All Rights Reserved
 * Unauthorized copying of this file is strictly prohibited
 */
 
//Used to combine reducers
import { combineReducers } from "redux";
import userAuthReducer from "./userAuthReducer";
import profileReducer from "./profileReducer";
import searchTutorReducer from "./searchTutorReducer";
import searchReviewsReducer from "./searchReviewsReducer";

// which state is produced by each reducer
export default combineReducers({
  userAuth : userAuthReducer,
  viewTutor : profileReducer,
  searchTutor: searchTutorReducer,
  searchReviews : searchReviewsReducer
});
