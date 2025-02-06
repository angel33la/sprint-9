// @ts-nocheck
import useCounter from "hooks/useCounter";
import React, { useEffect, useState } from "react";

const MIN_CATS_TO_FETCH = 5;
export default function Counter(props) {
  const [count, inc, dec] = useCounter(MIN_CATS_TO_FETCH);

  //   useEffect(() => {
  //     props?.valueUpdated(count);
  //   });

  return (
    <div>
      <p>Cats to Fetch: {count}</p>
      <button className="cats-button" onClick={inc}>
        Increment
      </button>
      <button className="cats-button" disabled={count == 5} onClick={dec}>
        Decrement
      </button>
    </div>
  );
}
