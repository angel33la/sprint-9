import { useState } from "react";

function useCounter(initVal = 0) {
  const [count, setCount] = useState(initVal);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return [count, increment, decrement];
}

export default useCounter;
