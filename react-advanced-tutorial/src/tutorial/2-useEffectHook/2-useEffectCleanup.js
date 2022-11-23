import React, { useState, useEffect } from "react";

const useEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("resize", checkSize);

    //cleanup function is very useful for conditional rendering.
    return () => {
      console.log("Clean Up");
      window.removeEventListener("resize", checkSize);
    };
  });
  return (
    <>
      <h1>Window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default useEffectCleanup;
