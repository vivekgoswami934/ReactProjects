import {
  GET_WATCHES_DATA_FAILURE,
  GET_WATCHES_DATA_REQUEST,
  GET_WATCHES_DATA_SUCCESS,
} from "./actionType";

// NOTE: DO NOT MODIFY the intial state structure in this file.
const initialState = {
  watches: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_WATCHES_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case GET_WATCHES_DATA_SUCCESS:
      // {console.log(payload)}
      return {
        ...state,
        isLoading: false,
        isError: false,
        watches: payload,
      };
    case GET_WATCHES_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export { reducer };
