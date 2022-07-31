import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "api/api.slice";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: { rootReducer, [apiSlice.reducerPath]: apiSlice.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
