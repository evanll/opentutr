import axios from "axios";
import { FETCH_USER, FETCH_TUTOR, SEARCH_TUTOR, SEARCH_REVIEWS } from "./types"

export const fetchUser = () => async dispatch => {
  console.log("dispatched");
  const res = await axios.get("/api/user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchTutor = (tutorId) => async dispatch => {
  const res = await axios.get("/api/tutor/" + tutorId);
  dispatch({ type: FETCH_TUTOR, payload: res.data });
};

export const searchTutor = (searchQuery) => async dispatch => {
  const res = await axios.get("/api/tutors" + searchQuery);
  dispatch({ type: SEARCH_TUTOR, payload: res.data });
};

export const submitLogin = (values, history) => async dispatch => {
  const res = await axios.post("/api/login", values);

  // redirection
  if (res.status == 200) {
    history.push("/");
  } else {
    history.push("/login");
  }
};

export const updateProfile = (values, history) => async dispatch => {
  const res = await axios.post("/api/insertInfo/:tutor_id", values);
  history.push("/");
  //dispatch({ type: SEARCH_TUTOR, payload: res.data });
};

export const submitReview = (values, history) => async dispatch => {
  const res = await axios.post("/api/insertInfo/:tutor_id", values);
  history.push("/");

  //dispatch({ type: SEARCH_TUTOR, payload: res.data });
};

export const submitRegistration = (values, history) => async dispatch => {
  const res = await axios.post("/api/register", values);
  history.push("/");

  //dispatch({ type: SEARCH_TUTOR, payload: res.data });
};

export const searchReviews = () => async dispatch => {
  const res = await axios.get("/api/allReview/12");
  dispatch({ type: SEARCH_REVIEWS, payload: res.data });
};
