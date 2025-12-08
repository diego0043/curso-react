import { useState } from "react";

export const useCounter = (initialValue: number = 10) => {
  const [counter, setCounter] = useState<number>(initialValue);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleDegree = () => {
    setCounter((value) => value - 1);
  };

  const handleReset = () => {
    setCounter(initialValue);
  };
  return {
    // Values
    counter,

    // Methods
    handleAdd,
    handleDegree,
    handleReset,
  };
};
