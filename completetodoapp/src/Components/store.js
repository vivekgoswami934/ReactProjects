import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { appReducer } from "./AppReducer/reducer";
import { reducer2 } from "./AppReducer/reducer2";

const rootReducer = combineReducers({ appReducer, reducer2 });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

// console.log(store.appReducer);
