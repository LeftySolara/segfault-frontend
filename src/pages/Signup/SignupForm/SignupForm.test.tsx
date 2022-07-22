import React from "react";
import { fireEvent, render, screen } from "utils/test-utils";

import SignupForm from "./SignupForm";

describe("SignupForm", () => {
  let emailInput: HTMLElement;
  let usernameInput: HTMLElement;
  let passwordInput: HTMLElement;
  let confirmPasswordInput: HTMLElement;
  let submitButton: HTMLElement;

  beforeEach(() => {
    render(<SignupForm />);

    emailInput = screen.getByLabelText(/Email/);
    usernameInput = screen.getByLabelText(/Username/);
    passwordInput = screen.getByLabelText(/^Password/);
    confirmPasswordInput = screen.getByLabelText(/^Confirm Password/);
    submitButton = screen.getByText("Sign Up");
  });

  it("should render form elements", () => {
    // Form inputs
    expect(emailInput).toBeInTheDocument();
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(confirmPasswordInput).toBeInTheDocument();

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
    expect(submitButton).toBeInTheDocument();
  });

  describe("on submit", () => {
    it("should redirect to the home page after successful submission", () => {
      // Implement me!
    });

    it("should display an error if the entered password does not meet minimum requirements", () => {
      const errorMessage = /Password does not meet minimum requirements/i;

      fireEvent.change(emailInput, { target: { value: "hello@example.com" } });
      fireEvent.change(usernameInput, { target: { value: "example" } });
      fireEvent.change(passwordInput, { target: { value: "hello" } });
      fireEvent.change(confirmPasswordInput, { target: { value: "hello" } });

      expect(screen.queryByText(errorMessage)).not.toBeInTheDocument();
      fireEvent.click(submitButton);
      expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });

    it("Should display an error if the passwords do not match", () => {
      const errorMessage = /Passwords must match/i;

      fireEvent.change(emailInput, { target: { value: "hello@example.com" } });
      fireEvent.change(usernameInput, { target: { value: "example" } });
      fireEvent.change(passwordInput, { target: { value: "hello" } });
      fireEvent.change(confirmPasswordInput, { target: { value: "hello1" } });

      expect(screen.queryByText(errorMessage)).not.toBeInTheDocument();
      fireEvent.click(submitButton);
      expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });

    it("should display an error message if the email address is already in use", () => {
      // Implement me!
    });

    it("should display an error message if the username is already in use", () => {
      // Implement me!
    });
  });
});
