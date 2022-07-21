import React from "react";
import { render, screen } from "utils/test-utils";

import SignupForm from "./SignupForm";

describe("SignupForm", () => {
  it("should render form elements", () => {
    render(<SignupForm />);

    // Form inputs
    expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Username/)).toBeInTheDocument();
    expect(screen.getByLabelText(/^Password/)).toBeInTheDocument();
    expect(screen.getByLabelText(/^Confirm Password/)).toBeInTheDocument();

    // Password rules
    expect(
      screen.getByText(
        "Must be at least 8 characters and include a mix of letters, numbers, and symbols",
      ),
    ).toBeInTheDocument();

    // Link to login page
    expect(
      screen.getByRole("link", { name: "Log in Instead" }),
    ).toBeInTheDocument();

    // Submit button
    expect(screen.getByRole("button", { name: "Sign Up" })).toBeInTheDocument();
  });
});
