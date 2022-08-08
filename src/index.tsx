import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { MantineProvider } from "@mantine/core";
import { setupStore } from "store/store";

import Navbar from "components/navbar/Navbar";
import theme from "./assets/theme";
import App from "./App";

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
        <Navbar />
        <App />
      </MantineProvider>
    </Provider>
  </BrowserRouter>,
);
