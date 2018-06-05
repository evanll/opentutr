/* Written by
 * Evan Lalopoulos <evan.lalopoulos.2017@my.bristol.ac.uk>
 * Harrison Boyns <hb17757.2017@my.bristol.ac.uk>
 * A project for Web Technologies
 * University of Bristol, May 2018
 * Copyright (C) - All Rights Reserved
 * Unauthorized copying of this file is strictly prohibited
 */
 
import { SEARCH_REVIEWS } from "../actions/types";

const initialState = [];    //Initial state is an empty Array of reviews

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_REVIEWS:
      return action.payload;
    default:
      return state;
  }
}
