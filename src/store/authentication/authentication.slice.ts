import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/store";

interface AuthenticationState {
  isLoggedin: boolean;
  user: {
    id: string;
    email: string;
    username: string;
  } | null;
}

const initialState: AuthenticationState = {
  isLoggedin: false,
  user: null,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login: (state: AuthenticationState) => {
      // TODO: implement
      state.isLoggedin = true;
      state.user = { id: "1", email: "hello@example.com", username: "hello" };
    },
    logout: (state: AuthenticationState) => {
      // TODO: implement
      state.isLoggedin = false;
      state.user = null;
    },
    checkAuth: (
      state: AuthenticationState,
      action: PayloadAction<AuthenticationState>,
    ) => {
      // TODO: implement
      state.isLoggedin = action.payload.isLoggedin;
      state.user = action.payload.user;
    },
  },
});

export const selectUsername = (state: RootState) =>
  state.authentication.user ? state.authentication.user.username : "";

export const { login, logout, checkAuth } = authenticationSlice.actions;

export default authenticationSlice.reducer;
