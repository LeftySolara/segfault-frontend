import React from "react";
import { render, screen } from "@testing-library/react";

import SignupPage from "./SignupPage";

describe("LoginPage", () => {
  it("renders SignupPage component", () => {
    render(<SignupPage />);
    expect(screen.getByText(/Sign Up/i)).toBeInTheDocument();
  });
});
