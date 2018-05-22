import axios from "axios";
import { FETCH_TUTOR, SEARCH_TUTOR, SEARCH_REVIEWS } from "./types"

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
  const res = await axios.get("/api/all-tutor-info");
  dispatch({ type: FETCH_TUTOR, payload: res.data });
};

export const searchTutor = () => async dispatch => {
  console.log("waiting to dispatch searchTutors action");
  const res = await axios.get("/api/all-tutor");
  dispatch({ type: SEARCH_TUTOR, payload: res.data });
};

export const searchReviews = () => async dispatch => {
  console.log("waiting to dispatch searchReviews action");
  const res = await axios.get("/api/allReview/12");
  dispatch({ type: SEARCH_REVIEWS, payload: res.data });
};
