import React, { useState } from "react";

const useStateCounter = () => {
  const [value, setValue] = useState(0);
  const iCounter = () => {
    setTimeout(() => {
      // set value is synchronous
      //   setValue(value + 1);
      // by doing this it will take the current value and right before update.
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  const dCounter = () => {
    setValue(value - 1);
  };
  return (
    <>
      <h2>Complex Counter - Functional Update.</h2>
      <section style={{ margin: "4rem 0" }}>
        <h1>{value}</h1>
        <section className="btn-container">
          <button type="button" className="btn" onClick={dCounter}>
            Decrease
          </button>
          <button type="button" className="btn" onClick={() => setValue(0)}>
            Reset
          </button>
          <button type="button" className="btn" onClick={iCounter}>
            Increase
          </button>
        </section>
      </section>
    </>
  );
};

export default useStateCounter;
