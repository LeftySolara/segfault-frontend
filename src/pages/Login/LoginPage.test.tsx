import React from "react";
import { render, screen } from "utils/test-utils";

import LoginPage from "./LoginPage";

describe("LoginPage", () => {
  it("renders LoginPage component", () => {
    render(<LoginPage />);
    expect(screen.getByText(/Log in to your account/i)).toBeInTheDocument();
  });
});
