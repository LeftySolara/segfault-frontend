import { combineReducers } from "@reduxjs/toolkit";
import api from "services/api";
import authReducer from "./authentication/authentication.slice";

const rootReducer = combineReducers({
  api: api.reducer,
  auth: authReducer,
});

export default rootReducer;
