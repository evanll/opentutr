/* Written by
 * Evan Lalopoulos <evan.lalopoulos.2017@my.bristol.ac.uk>
 * Harrison Boyns <hb17757.2017@my.bristol.ac.uk>
 * A project for Web Technologies
 * University of Bristol, May 2018
 * Copyright (C) - All Rights Reserved
 * Unauthorized copying of this file is strictly prohibited
 */
 
import { FETCH_USER } from "../actions/types";

const initialState = null;

// The state can be null if the user status not determined yet
// userId if user logged
// false if not logged
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      // if the payload is empty
      if (action.payload.authenticated === false) {
        return false;
      }
      // else return user
      return action.payload.userId;
    default:
      return state;
  }
}
