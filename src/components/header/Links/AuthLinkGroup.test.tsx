import React from "react";
import { render, screen } from "utils/test-utils";

import AuthLinkGroup from "./AuthLinkGroup";

describe("AuthLinkGroup", () => {
  beforeEach(() => {
    render(<AuthLinkGroup />);
  });

  it("should display login and signup links", () => {
    expect(screen.getByText(/Log In/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign Up/i)).toBeInTheDocument();
  });
});
