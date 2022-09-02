const initialState = {
  isAuth: false,
  loading: false,
  error: false,
};

export const reducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};
