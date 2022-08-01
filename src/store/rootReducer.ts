import { combineReducers } from "@reduxjs/toolkit";
import api from "services/api";
import authReducer from "./auth/auth.slice";

const rootReducer = combineReducers({
  api: api.reducer,
  auth: authReducer,
});

export default rootReducer;
