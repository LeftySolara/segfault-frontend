import React, { ReactElement } from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import theme from "assets/theme";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <MemoryRouter>
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      {children}
    </MantineProvider>
  </MemoryRouter>
);

const renderWithProviders = (ui: ReactElement, { route = "/" } = {}) => {
  window.history.pushState({}, "Test Page", route);
  return render(ui, { wrapper: Providers });
};

export * from "@testing-library/react";
export { renderWithProviders as render };
