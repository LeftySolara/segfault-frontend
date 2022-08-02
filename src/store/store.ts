import { configureStore, PreloadedState } from "@reduxjs/toolkit";
import api from "services/api";
import rootReducer from "./rootReducer";

export type RootState = ReturnType<typeof rootReducer>;

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });
}

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
