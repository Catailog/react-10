import { useState } from 'react';

export default function useCount(initVal: number) {
  const [count, setCount] = useState<number>(initVal);

  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };
  const decreaseCount = () => {
    setCount((prev) => prev - 1);
  };
  const resetCount = () => {
    setCount(initVal);
  };

  return { count, increaseCount, decreaseCount, resetCount };
}
