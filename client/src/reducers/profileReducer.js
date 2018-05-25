import { FETCH_TUTOR } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_TUTOR:
      return action.payload;
    default:
      return state;
  }
}
