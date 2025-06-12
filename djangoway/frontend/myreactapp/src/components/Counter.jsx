import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count <= 0) {
      return;
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <p>Clicks: {count}</p>
      <button onClick={handleIncrement}>+ </button>
      <button onClick={handleDecrement}>- </button>
    </div>
  );
}
