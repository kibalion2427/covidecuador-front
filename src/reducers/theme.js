import { SET_THEME } from "./../actions";
export const theme = (state = {}, action) => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};
