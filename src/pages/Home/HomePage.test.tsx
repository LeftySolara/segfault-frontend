import React from "react";
import { render, screen } from "utils/test-utils";

import HomePage from "./HomePage";

describe("HomePage", () => {
  it("renders HomePage component", () => {
    render(<HomePage />);
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });
});
