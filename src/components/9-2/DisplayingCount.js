import React, { useState } from "react";

export default function DisplayingCount(props) {
  const [count, setCount] = useState(props.initialState.count);

  const incrementState = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementState}>Increment</button>
    </div>
  );
}
