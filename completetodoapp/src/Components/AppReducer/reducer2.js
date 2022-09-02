import {
  ADD_IN_COMPLETED,
  ADD_IN_INPROGRESS,
  ADD_IN_TODO,
} from "./acction2Type";

let initialState = {
  todoArr: [],
  inprogressArr: [],
  completedArr: [],
};

export const reducer2 = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case ADD_IN_TODO:
      return {
        ...state,
        todoArr: [...state.todoArr, payload],
      };
    case ADD_IN_INPROGRESS:
     { console.log(initialState.inprogressArr);}
      return {
        ...state,
        inprogressArr: [...state.inprogressArr, payload],
      };
    case ADD_IN_COMPLETED:
      return {
        ...state,
        completedArr: [...state.completedArr, payload],
      };
    default:
      return state;
  }
};
