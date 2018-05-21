import { FETCH_TUTOR } from "../actions/types";

const initialState = {};

// = {} so state is not undefined
export default function(state = initialState, action) {
  console.log("what action:");
  console.log(action);
  switch (action.type) {
    case FETCH_TUTOR:
      return action.payload;
    default:
      return state;
  }
}
