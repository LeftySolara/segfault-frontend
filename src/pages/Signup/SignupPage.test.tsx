import React from "react";
import { render, screen } from "utils/test-utils";

import SignupPage from "./SignupPage";

describe("SignupPage", () => {
  it("renders SignupPage component", () => {
    render(<SignupPage />);
    expect(screen.getByText(/Create a new account/i)).toBeInTheDocument();
  });
});
