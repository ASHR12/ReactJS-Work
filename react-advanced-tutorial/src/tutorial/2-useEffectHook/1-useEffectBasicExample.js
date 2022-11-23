import React, { useState, useEffect } from "react";

const useEffectBasicExample = () => {
  const [value, setValue] = useState(0);
  // Will be called on initial render and once value change.
  useEffect(() => {
    console.log("call useEffect");
    if (value >= 1) {
      document.title = `New Message - ${value}`;
    }
  }, [value]);

  // Will be called only once on initial render.
  useEffect(() => {
    console.log("hello World");
  }, []);
  return (
    <>
      <h1>{value}</h1>
      <button type="button" className="btn" onClick={() => setValue(value + 1)}>
        Click Me
      </button>
    </>
  );
};

export default useEffectBasicExample;
