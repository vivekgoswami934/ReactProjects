import {
  ADD_IN_COMPLETED,
  ADD_IN_INPROGRESS,
  ADD_IN_TODO,
} from "./acction2Type";

export const addInTodo = (payload) => (dispatch) => {
  dispatch({ type: ADD_IN_TODO, payload });
};
export const addInInProgress = (payload) => (dispatch) => {
  dispatch({ type: ADD_IN_INPROGRESS, payload });
};
export const addInCompleted = (payload) => (dispatch) => {
  dispatch({ type: ADD_IN_COMPLETED, payload });
};
