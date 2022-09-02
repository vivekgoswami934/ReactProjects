import axios from "axios";
import { GET_TAG_FAILURE, GET_TASKS_REQUEST } from "./actionType";

const getTask = () => (dispatch) => {
  dispatch({ type: GET_TASKS_REQUEST });

  return axios
    .get("http://localhost:8080/tasks")
    .then((r) => dispatch({ type: GET_TAG_FAILURE, payload: r.data })).catch( e => dispatch{type : GET_TAG_FAILURE,payload:e }  )
};
