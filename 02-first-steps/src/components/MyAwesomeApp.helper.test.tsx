import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MyAwesomeApp } from "./MyAwesomeApp";

describe("MyAwesomeApp", () => {
  test("Should rendern firstName and LastName", () => {
    //container es ideal cuando no cambia
    const { container } = render(<MyAwesomeApp />);
    const h1 = container.querySelector("h1");
    const h3 = container.querySelector("h3");
    // screen.debug();
    expect(h1?.innerHTML).toBe("Diego");
    expect(h3?.innerHTML).toBe("Valencia");
  });

  test("Should rendern firstName and LastName - screen", () => {
    render(<MyAwesomeApp />);
    //funciona cuando hay eventos o cambios
    screen.debug();
    // const h1 = screen.getByRole("heading", {
    //   level: 1,
    // });

    const h1 = screen.getByTestId("first-name-title");
    expect(h1.innerHTML).toContain("Diego");
  });

  test("Should match snapshop", () => {
    const { container } = render(<MyAwesomeApp />);
    expect(container).toMatchSnapshot();
  });
});
