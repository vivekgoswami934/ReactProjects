import {
  GET_TAG_FAILURE,
  GET_TAG_REQUEST,
  GET_TAG_SUCCESS,
  GET_TASKS_FAILURE,
  GET_TASKS_REQUEST,
  GET_TASKS_SUCCESS,
} from "./actionType";

const initialState = {
  tasks: [],
  tags: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_TASKS_REQUEST:
      return { ...state, isLoading: true };
    case GET_TASKS_SUCCESS:
      return { ...state, isLoading: false, tasks: payload };
    case GET_TASKS_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case GET_TAG_REQUEST:
      return {
        ...state,
      };
    case GET_TAG_SUCCESS:
      return {
        ...state,
        tags: payload,
      };
    case GET_TAG_FAILURE:
      return {
        ...state,
      };

    default:
      return state;
  }
};

//appReducer
