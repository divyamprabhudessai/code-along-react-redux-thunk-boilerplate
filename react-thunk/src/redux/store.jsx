import {reducer} from "./reducer";
import {thunk} from "redux-thunk";
import {applyMiddleware, createStore} from "redux";

// using a middleware called thunk
export const store = createStore(reducer, applyMiddleware(thunk));