import React from "react";
import { act } from "react-dom/test-utils";
import { fireEvent, render, screen, waitFor } from "utils/test-utils";
import LogoutButton from "./LogoutButton";

describe("LogoutButton", () => {
  describe("on render", () => {
    beforeEach(() => {
      render(<LogoutButton />);
    });

    it("should display the text 'Log Out'", () => {
      expect(screen.getByText(/Log Out/i)).toBeInTheDocument();
    });
  });

  describe("on click", () => {
    beforeEach(() => {
      render(
        <LogoutButton />,
        {},
        {
          preloadedState: {
            auth: {
              user: {
                email: "hello@example.com",
                username: "hello",
                id: "12345",
              },
            },
          },
        },
      );
    });

    it("should log the user out and stop displaying", async () => {
      const button = screen.getByText(/Log Out/i);
      await act(async () => {
        fireEvent.click(button);
      });

      waitFor(() => expect(button).not.toBeInTheDocument());
    });
  });
});
