import useCounter from "hooks/useCounter";
import React, { useState } from "react";

export default function MyCounter() {
  const chicken = useCounter(100);
  const turkey = useCounter(50);
  const cows = useCounter(10);

  return (
    <>
      <div>
        <p>Count Chickens: {chicken.count}</p>
        <button onClick={chicken.increment}>Increment</button>
        <button onClick={chicken.decrement}>Decrement</button>
      </div>

      <div>
        <p>Count Turkeys: {turkey.count}</p>
        <button onClick={turkey.increment}>Increment</button>
        <button onClick={turkey.decrement}>Decrement</button>
      </div>

      <div>
        <p>Count Cows: {cows.count}</p>
        <button onClick={cows.increment}>Increment</button>
        <button onClick={cows.decrement}>Decrement</button>
      </div>
    </>
  );
}
