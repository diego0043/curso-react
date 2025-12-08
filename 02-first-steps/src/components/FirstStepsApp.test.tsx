import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";
import { render, screen } from "@testing-library/react";

const mockItemCounter = vi.fn((props: unknown) => {
  return <div data-testid="ItemCounter" />;
});

vi.mock("../shopping-cart/ItemCounter.tsx", () => ({
  ItemCounter: (props: unknown) => mockItemCounter(props),
}));

// vi.mock("../shopping-cart/ItemCounter.tsx", () => ({
//   ItemCounter: ({ productName, quantity }) => (
//     <div
//       data-testid="ItemCounter"
//       productName={productName}
//       quantity={quantity}
//     />
//   ),
// }));

describe("FirstStepsApp", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });
  test("should match snapshot", () => {
    const { container } = render(<FirstStepsApp />);
    expect(container).toMatchSnapshot();
  });

  test("should render the correct number of ItemCounter component", () => {
    render(<FirstStepsApp />);
    const itemCounterComponents = screen.getAllByTestId("ItemCounter");
    expect(itemCounterComponents.length).toBe(4);
  });

  test("Should render ItemCounter with correct props", () => {
    render(<FirstStepsApp />);
    expect(mockItemCounter).toHaveBeenCalledTimes(4);
    expect(mockItemCounter).toHaveBeenCalledWith({
      productName: "Nintendo Switch 2",
      quantity: 2,
    });

    expect(mockItemCounter).toHaveBeenCalledWith({
      productName: "Pro controler",
      quantity: 2,
    });

    expect(mockItemCounter).toHaveBeenCalledWith({
      productName: "Nintendo Switch V2",
      quantity: 2,
    });

    expect(mockItemCounter).toHaveBeenCalledWith({
      productName: "Play Station 5 Pro",
      quantity: 4,
    });
  });
});
