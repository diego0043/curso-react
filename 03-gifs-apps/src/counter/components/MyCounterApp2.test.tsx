import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { MyCounterApp } from "./MyCounterApp";

const handleAddMock = vi.fn();
const handleSubstrackMock = vi.fn();
const handleResetMock = vi.fn();

vi.mock("../hooks/useCounter", () => ({
  useCounter: () => ({
    counter: 20,
    handleAdd: handleAddMock,
    handleDegree: handleSubstrackMock,
    handleReset: handleResetMock,
  }),
}));

describe("MyCounterApp2", () => {
  test("should render the component", () => {
    render(<MyCounterApp />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      "counter: 20"
    );

    expect(screen.getByRole("button", { name: "+1" })).toBeDefined();
    expect(screen.getByRole("button", { name: "-1" })).toBeDefined();
    expect(screen.getByRole("button", { name: "Reset" })).toBeDefined();
  });

  test("should call handleAdd if button is clicked", () => {
    render(<MyCounterApp />);
    const buttonAdd = screen.getByRole("button", { name: "+1" });
    fireEvent.click(buttonAdd);

    expect(handleAddMock).toHaveBeenCalled();
    expect(handleSubstrackMock).not.toHaveBeenCalled();
    expect(handleResetMock).not.toHaveBeenCalled();
  });
});
