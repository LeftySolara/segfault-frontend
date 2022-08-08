import React from "react";
import { render, screen } from "utils/test-utils";
import PageHeader from "./PageHeader";

describe("PageHeader", () => {
  describe("on render", () => {
    it("should display the site title", () => {
      render(<PageHeader />);

      const title = screen.getByText(/Segfault/i);
      expect(title).toBeInTheDocument();
    });

    it("should display login and signup links if the user is not logged in", () => {
      render(<PageHeader />);

      expect(screen.queryByText(/Log Out/i)).not.toBeInTheDocument();
      expect(screen.getByText(/Log In/i)).toBeInTheDocument();
      expect(screen.getByText(/Sign Up/i)).toBeInTheDocument();
    });

    it("should display the logout button if the user is logged in", () => {
      render(
        <PageHeader />,
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

      expect(screen.getByText(/Log Out/i)).toBeInTheDocument();
      expect(screen.queryByText(/Sign up/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/Log In/i)).not.toBeInTheDocument();
    });
  });
});
