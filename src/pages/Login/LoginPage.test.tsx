import React from "react";
import { render, screen } from "@testing-library/react";

import LoginPage from "./LoginPage";

describe("LoginPage", () => {
  it("renders LoginPage component", () => {
    render(<LoginPage />);
    expect(screen.getByText(/Log In/i)).toBeInTheDocument();
  });
});
