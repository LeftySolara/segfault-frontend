import React from "react";
import { render, screen } from "utils/test-utils";

import LoginPage from "./LoginPage";

describe("LoginPage", () => {
  it("renders LoginPage component", () => {
    render(<LoginPage />);
    expect(screen.getByText(/Welcome Back/i)).toBeInTheDocument();
  });
});
