import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe("ItemCounter", () => {
  test("Shoud render with default values", () => {
    const name: string = "Teste";
    render(<ItemCounter productName={name} />);
    expect(screen.getByText(name)).toBeDefined();
  });

  test("Shoud render with custom quantity", () => {
    const name: string = "Teste";
    const quantity: number = 10;
    render(<ItemCounter productName={name} quantity={quantity} />);
    expect(screen.getByText(quantity)).toBeDefined();
  });

  test("Shoud increse count when +1 button is pressed", () => {
    const name: string = "Teste";
    render(<ItemCounter productName={name} quantity={1} />);
    const [, buttonAdd] = screen.getAllByRole("button");
    fireEvent.click(buttonAdd);
    expect(screen.getByText("2"));
  });

  test("Shoud decrese count when -1 button is pressed", () => {
    const name: string = "Teste";
    render(<ItemCounter productName={name} quantity={6} />);
    const [buttonDecrese] = screen.getAllByRole("button");
    fireEvent.click(buttonDecrese);
    expect(screen.getByText("5"));
  });

  test("Shoud not decrese count when -1 button is pressed and quantity is 1", () => {
    const name: string = "Teste";
    render(<ItemCounter productName={name} quantity={1} />);
    const [buttonDecrese] = screen.getAllByRole("button");
    fireEvent.click(buttonDecrese);
    expect(screen.getByText("1"));
  });

  test("Should change to red when count is 1", () => {
    const quantity: number = 1;
    const name: string = "Teste";
    render(<ItemCounter productName={name} quantity={quantity} />);

    const itemTest = screen.getByText(name);
    expect(itemTest.style.color).toBe("red");
  });

  test("Should change to black when count is > 1", () => {
    const quantity: number = 2;
    const name: string = "Teste";
    render(<ItemCounter productName={name} quantity={quantity} />);

    const itemTest = screen.getByText(name);
    expect(itemTest.style.color).toBe("black");
  });
});
