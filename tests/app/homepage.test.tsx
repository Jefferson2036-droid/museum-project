import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "@/app/page";

describe("homepage", () => {
  it("renders the homepage as an opening chapter with clear routes", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /history of artificial intelligence/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /artificial intelligence did not arrive as a single invention/i
      )
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /seven turns that built modern ai/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /enter through scenes and texts/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /four companion routes/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /read the documents that changed it/i })
    ).toHaveAttribute("href", "/reading-maps/intellectual-lineage");

    expect(
      screen.getByRole("link", { name: /follow the people and labs/i })
    ).toHaveAttribute("href", "/people-and-institutions");

    expect(
      screen.getByRole("link", { name: /decode the math/i })
    ).toHaveAttribute("href", "/guides/embeddings-latent-space-and-llm-math");

    expect(
      screen.getByRole("heading", {
        level: 3,
        name: /choose the question that clarifies the era/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 3,
        name: /take the seven-era tour/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 3,
        name: /the machine question comes first/i,
      })
    ).toBeInTheDocument();

    expect(screen.getAllByRole("img").length).toBeGreaterThan(2);
  }, 20000);
});
