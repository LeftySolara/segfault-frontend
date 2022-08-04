import React from "react";
import { render, screen } from "utils/test-utils";
import App from "./App";

test("renders home page", () => {
  render(<App />);
  const textElement = screen.getByText(/Home/i);
  expect(textElement).toBeInTheDocument();
});
