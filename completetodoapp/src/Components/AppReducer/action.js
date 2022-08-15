import axios from "axios";
import { GET_DATA_SUCCESS } from "./actionType";

export const getData = () => (dispatch) => {
  axios
    .get("http://localhost:8080/todos")
    .then((res) => dispatch({ type: GET_DATA_SUCCESS, payload: res.data }))
    .catch((error) => console.log(error));
};
