import { FETCH_TUTOR } from "../actions/types";

// = {} so state is not undefined
export default function(state = {}, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_TUTOR:
      return action.payload;
    default:
      return state;
  }
}
