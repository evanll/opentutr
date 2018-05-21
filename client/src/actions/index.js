import axios from "axios";
import { FETCH_TUTOR } from "./types"

// const fetchTutor = () => {
//   return function(dispatch) {
//     axios
//     .get("/api/tutor-profile")
//     .then(res => dispatch({type: FETCH_TUTOR, payload: res}));
//   }
//
// };

export const fetchTutor = () => async dispatch => {
  console.log("waiting to dispatch fetchTutor action");
  const res = await axios.get("/api/tutor-profile");
  dispatch({ type: FETCH_TUTOR, payload: res.data });
};
