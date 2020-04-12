import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { theme } from "../reducers/theme";

const initialState = {
  city: "green"
};

// REACT - THUNK

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  theme,
  initialState,
  composeEnhacer(applyMiddleware(thunk))
);

// export const store = createStore(
//   theme,
//   initialState,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
