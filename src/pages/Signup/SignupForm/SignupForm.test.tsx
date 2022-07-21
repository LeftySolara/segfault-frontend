import React from "react";
import { render, screen } from "utils/test-utils";

import SignupForm from "./SignupForm";

describe("SignupForm", () => {
  it("should render form elements", () => {
    render(<SignupForm />);

    expect(screen.getByPlaceholderText("your@email.com")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("my_username")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Must be at least 8 characters and include a mix of letters, numbers, and symbols",
      ),
    ).toBeInTheDocument();
    expect(screen.getByText("Log in Instead")).toBeInTheDocument();
    expect(screen.getByText("Sign Up")).toBeInTheDocument();
  });
});
