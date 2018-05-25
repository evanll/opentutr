import { SEARCH_TUTOR } from "../actions/types";

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_TUTOR:
      return action.payload;
    default:
      return state;
  }
}
