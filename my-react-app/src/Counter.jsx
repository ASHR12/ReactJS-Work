import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="mb-3">
      <h2>Counter: {count}</h2>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
