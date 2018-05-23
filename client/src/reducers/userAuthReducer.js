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
