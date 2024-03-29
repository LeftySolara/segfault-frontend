import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/store";
import { User } from "services/auth";

type AuthState = {
  user: User | null;
};

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null } as AuthState,
  reducers: {
    setCredentials: (
      state: AuthState,
      { payload: { user } }: PayloadAction<{ user: User }>,
    ) => {
      state.user = user;
    },
    clearUser: (state: AuthState) => {
      state.user = null;
    },
  },
});

export const { setCredentials, clearUser } = authSlice.actions;

export const selectCurrentUser = (state: RootState) => state.auth.user;

export default authSlice.reducer;
