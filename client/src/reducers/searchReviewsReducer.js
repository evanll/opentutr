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
