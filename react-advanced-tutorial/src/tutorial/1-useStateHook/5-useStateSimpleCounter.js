import React, { useState } from "react";

const useStateSimpleCounter = () => {
  const [value, setValue] = useState(0);
  const iCounter = () => {
    setValue(value + 1);
  };
  const dCounter = () => {
    setValue(value - 1);
  };
  return (
    <>
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

export default useStateSimpleCounter;
