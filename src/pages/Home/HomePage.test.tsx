import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import HomePage from "./HomePage";

describe("HomePage", () => {
  it("renders HomePage component", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });
});
