import React, { PropsWithChildren } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore, PreloadedState } from "@reduxjs/toolkit";

import { MantineProvider } from "@mantine/core";
import theme from "assets/theme";

import axiosClient from "api/axiosClient";

import type { AppStore, RootState } from "../store/store";
import rootReducer from "../store/rootReducer";

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

function renderWithProviders(
  ui: React.ReactElement,
  { route = "/" } = {},
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in.
    store = configureStore({ reducer: rootReducer, preloadedState }),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  // eslint-disable-next-line @typescript-eslint/ban-types, react/function-component-definition
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    window.history.pushState({}, "Test Page", route);
    return (
      <Provider store={store}>
        <MemoryRouter>
          <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
            {children}
          </MantineProvider>
        </MemoryRouter>
      </Provider>
    );
  }

  // Return an object with the store and all of RTL's query functions.
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

jest.mock("api/axiosClient");
const mockedAxios = axiosClient as jest.Mocked<typeof axiosClient>;

export * from "@testing-library/react";

export { renderWithProviders as render, mockedAxios };
