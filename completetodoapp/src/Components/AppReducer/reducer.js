import {
  GET_DATA_FAILED,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
} from "./actionType";

let initialState = {
  todos: [],
  isLoading: false,
  isError: false,
};

export const appReducer = (state = initialState, action) => {
  const { type, payload } = action;
  // console.log("payload", action.payload);
  switch (type) {
    case GET_DATA_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
    case GET_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        todos: [...payload],
      };
    }
    case GET_DATA_FAILED: {
      return { ...state, isLoading: false, isError: true };
    }

    default:
      return state;
  }
};
