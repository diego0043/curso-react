import { describe, test, afterEach, vi, expect } from "vitest";
import { render } from "@testing-library/react";
import { CustomHeader } from "./CustomHeader";

describe("CustomHeader", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test("Should render the title correctly", () => {
    const titleComponent = "Custom Header";
    const { container } = render(<CustomHeader title={titleComponent} />);
    const titleInside = container.querySelector("h1");
    expect(titleInside?.innerHTML).toBe(titleComponent);

    // expect(screen.getByText(titleComponent)).toBeDefined();
  });

  test("should render the description when provided", () => {
    const titleComponent = "Custom Header";
    const descriptionComponent = "Test texto";
    const { container } = render(
      <CustomHeader title={titleComponent} description={descriptionComponent} />
    );
    const descriptionInside = container.querySelector("p");
    expect(descriptionInside?.innerHTML).toBe(descriptionComponent);
  });

  test("Should not render description when not provider", () => {
    const titleComponent = "Custom Header";
    const { container } = render(<CustomHeader title={titleComponent} />);
    const descriptionInside = container.querySelector("p");
    expect(descriptionInside).toBeNull();
  });
});
