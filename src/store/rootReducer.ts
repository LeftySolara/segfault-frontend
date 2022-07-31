import { combineReducers } from "@reduxjs/toolkit";
import authenticationReducer from "./authentication/authentication.slice";

const rootReducer = combineReducers({
  authentication: authenticationReducer,
});

export default rootReducer;
