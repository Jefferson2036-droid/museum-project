import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "@/app/page";

describe("homepage", () => {
  it("renders the project-specific site shell", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /history of artificial intelligence/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/people, milestones, and ideas that shaped/i)
    ).toBeInTheDocument();
  });
});
