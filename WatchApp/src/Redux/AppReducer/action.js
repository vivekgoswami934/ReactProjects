//Write the ActionCreator functions here

import axios from "axios";
import {
  GET_WATCHES_DATA_FAILURE,
  GET_WATCHES_DATA_REQUEST,
  GET_WATCHES_DATA_SUCCESS,
} from "./actionType";

export const getData = (param) => (dispatch) => {
  dispatch({ type: GET_WATCHES_DATA_REQUEST });
  console.log("function called");
  axios
    .get("http://localhost:8080/watches", param)
    .then((res) =>
      dispatch({ type: GET_WATCHES_DATA_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: GET_WATCHES_DATA_FAILURE }));
};
