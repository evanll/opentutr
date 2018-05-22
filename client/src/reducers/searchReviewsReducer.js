import { SEARCH_REVIEWS } from "../actions/types";

const initialState = [];    //Initial state is an empty Array of reviews

// = {} so state is not undefined
export default function(state = initialState, action) {
  console.log("what action:");
  console.log(action);
  switch (action.type) {
    case SEARCH_REVIEWS:
      return action.payload;
    default:
      return state;
  }
}
