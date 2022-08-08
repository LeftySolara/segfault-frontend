import React from "react";
import { render, screen } from "utils/test-utils";
import PageHeader from "./PageHeader";

describe("PageHeader", () => {
  beforeEach(() => {
    render(<PageHeader />);
  });

  describe("on render", () => {
    it("should display the site title", () => {
      const title = screen.getByText(/Segfault/i);
      expect(title).toBeInTheDocument();
    });

    it("should display login and signup links", () => {
      expect(screen.getByText(/Log In/i)).toBeInTheDocument();
      expect(screen.getByText(/Sign Up/i)).toBeInTheDocument();
    });
  });
});
