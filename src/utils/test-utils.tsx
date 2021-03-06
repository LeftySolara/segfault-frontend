import React, { ReactElement } from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import theme from "assets/theme";
import axiosClient from "api/axiosClient";

jest.mock("api/axiosClient");
const mockedAxios = axiosClient as jest.Mocked<typeof axiosClient>;

const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

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
export { renderWithProviders as render, mockedAxios, mockedUseNavigate };
