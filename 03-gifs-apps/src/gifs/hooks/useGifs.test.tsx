import { afterAll, describe, expect, test, vi } from "vitest";
import { useGifs } from "./useGifs";
import { renderHook, act } from "@testing-library/react";
import * as gifActions from "../actions/get-gifs-by-query.action";

describe("useGifs", () => {
  test("should return default values and methods", () => {
    const { result } = renderHook(() => useGifs());
    expect(result.current.gifs.length).toBe(0);
    expect(result.current.searches.length).toBe(0);
    expect(result.current.handleSearch).toBeDefined();
    expect(result.current.handleTermClicked).toBeDefined();
  });

  test("should return a list of gifs", async () => {
    const { result } = renderHook(() => useGifs());
    await act(async () => {
      await result.current.handleSearch("diego");
    });
    expect(result.current.gifs.length).toBe(10);
  });

  test("should return a list of gifs when handleSearchClicked is called", async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleTermClicked("pedro");
    });

    expect(result.current.gifs.length).toBe(10);
  });

  test("should return a list of gifs from cache", async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleTermClicked("pedro");
    });

    expect(result.current.gifs.length).toBe(10);

    vi.spyOn(gifActions, "getGifsByQuery").mockRejectedValue(
      new Error("This is my custom error")
    );

    await act(async () => {
      await result.current.handleTermClicked("pedro");
    });

    expect(result.current.gifs.length).toBe(10);
  });

  test("should return no more than 8 previous terms ", async () => {
    const { result } = renderHook(() => useGifs());

    vi.spyOn(gifActions, "getGifsByQuery").mockResolvedValue([]);

    await act(async () => {
      await result.current.handleSearch("goku1");
    });

    await act(async () => {
      await result.current.handleSearch("goku2");
    });

    await act(async () => {
      await result.current.handleSearch("goku3");
    });

    await act(async () => {
      await result.current.handleSearch("goku4");
    });

    await act(async () => {
      await result.current.handleSearch("goku5");
    });

    await act(async () => {
      await result.current.handleSearch("goku6");
    });

    await act(async () => {
      await result.current.handleSearch("goku7");
    });

    await act(async () => {
      await result.current.handleSearch("goku8");
    });

    await act(async () => {
      await result.current.handleSearch("goku9");
    });

    await act(async () => {
      await result.current.handleSearch("goku10");
    });

    console.log(result.current.searches);
    expect(result.current.searches.length).toBe(8);
  });
});
