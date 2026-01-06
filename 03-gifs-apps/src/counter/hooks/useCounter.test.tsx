import { renderHook, act } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  test("Should initialize with default value of 10", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.counter).toBe(10);
  });

  test("Should initialize with value 20", () => {
    const initialValue = 20;
    const { result } = renderHook(() => useCounter(initialValue));
    expect(result.current.counter).toBe(initialValue);
  });

  test("Should increment counter when handleAdd is called", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.handleAdd();
    });
    expect(result.current.counter).toBe(11);
  });

  test("Should decrement counter when handleDegree is called", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.handleDegree();
    });
    expect(result.current.counter).toBe(9);
  });

  test("Should reset to initial value the counter when handleReset is called", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.handleDegree();
    });

    act(() => {
      result.current.handleDegree();
    });

    act(() => {
      result.current.handleReset();
    });

    expect(result.current.counter).toBe(10);
  });
});
