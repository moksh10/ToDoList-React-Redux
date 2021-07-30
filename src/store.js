import todoReducer from "./reducers/todoReducer";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
const store=createStore(todoReducer,composeWithDevTools(applyMiddleware(logger)))
export default store