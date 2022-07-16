import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders home page", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  const textElement = screen.getByText(/Home/i);
  expect(textElement).toBeInTheDocument();
});
