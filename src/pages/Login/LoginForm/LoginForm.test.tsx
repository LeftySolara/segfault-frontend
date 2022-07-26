import React from "react";
import { act } from "react-dom/test-utils";

import {
  fireEvent,
  mockedAxios,
  mockedUseNavigate,
  render,
  screen,
} from "utils/test-utils";
import LoginForm from "./LoginForm";

describe("LoginForm", () => {
  let emailInput: HTMLElement;
  let passwordInput: HTMLElement;
  let submitButton: HTMLElement;

  beforeEach(() => {
    render(<LoginForm />);

    emailInput = screen.getByLabelText(/Email/);
    passwordInput = screen.getByLabelText(/^Password/);
    submitButton = screen.getByText("Log In");
  });

  it("should render form elements", () => {
    // Form inputs
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();

    // Link to signup page
    expect(screen.getByText("Sign up Instead")).toBeInTheDocument();
  });

  describe("on submit", () => {
    it("should redirect to the home page after successfull submission", async () => {
      const mockResponse = { status: 200 };
      mockedAxios.post.mockResolvedValue(mockResponse);

      await act(async () => {
        fireEvent.change(emailInput, {
          target: { value: "hello@example.com" },
        });
        fireEvent.change(passwordInput, {
          target: { value: "hello123!" },
        });
        fireEvent.click(submitButton);
      });

      expect(mockedUseNavigate).toHaveBeenCalledTimes(1);
    });

    it("should display an error message if the entered credentials are invalid", async () => {
      const errorMessage = /Invalid credentials/i;

      const mockResponse = {
        status: 401,
        data: { message: "Invalid credentials" },
      };
      mockedAxios.post.mockResolvedValue(mockResponse);

      expect(screen.queryByText(errorMessage)).not.toBeInTheDocument();

      await act(async () => {
        fireEvent.change(emailInput, {
          target: { value: "hello@example.com" },
        });
        fireEvent.change(passwordInput, {
          target: { value: "wrongpassword" },
        });
        fireEvent.click(submitButton);
      });

      expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });

    it("should display an error message if the backend cannot be reached", async () => {
      const errorMessage = /Internal server error/i;

      const mockResponse = null;
      mockedAxios.post.mockResolvedValue(mockResponse);

      expect(screen.queryByText(errorMessage)).not.toBeInTheDocument();

      await act(async () => {
        fireEvent.change(emailInput, {
          target: { value: "hello@example.com" },
        });
        fireEvent.change(passwordInput, {
          target: { value: "wrongpassword" },
        });
        fireEvent.click(submitButton);
      });

      expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });
  });
});
