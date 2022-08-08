import React from "react";
import { render, screen } from "utils/test-utils";

import Navbar from "./Navbar";

describe("Navbar", () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  describe("on render", () => {
    it("should display the site title", () => {
      const title = screen.getByText(/Segfault/i);
      expect(title).toBeInTheDocument();
    });
  });
});
