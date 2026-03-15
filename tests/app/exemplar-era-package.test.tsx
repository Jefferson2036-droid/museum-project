import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import ComputationInformationFieldFormationPage from "@/app/eras/computation-information-field-formation/page";

describe("exemplar era package", () => {
  it("renders the first live era package with guide commentary and media status", () => {
    render(<ComputationInformationFieldFormationPage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /computation, information, and field formation/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getAllByText(/^why it matters$/i).length
    ).toBeGreaterThan(0);

    expect(screen.getByText(/logic to ai diagram/i)).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /media and source trail for this era/i,
      })
    ).toBeInTheDocument();

    expect(screen.getAllByText(/story card/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/source page/i).length).toBeGreaterThan(0);

    expect(
      screen.getAllByText(
        /dartmouth is the naming moment, not the whole origin story/i
      ).length
    ).toBeGreaterThan(0);

    expect(
      screen.getByRole("img", { name: /logic to ai convergence diagram/i })
    ).toBeInTheDocument();
  });
});
