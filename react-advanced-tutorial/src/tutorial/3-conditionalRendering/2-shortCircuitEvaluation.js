import React, { useState } from "react";

const ShortCircuitEvaluation = () => {
  const [text, setText] = useState("");
  // const firstVal = text || "Hello world";
  // const secondVal = text && "Hello world";
  const [isError, setIsError] = useState(false);
  return (
    <>
      {/* <h1>FirstValue: {firstVal}</h1>
      <h1>SecondValue: {secondVal}</h1> */}

      <h1>{text || "Default Heading"}</h1>
      {text && <h1>Include Component based on Condition</h1>}
      {!text && <h1>Include Component based on Condition</h1>}
      {isError && <h1>Error shown using circuit evaluation ...</h1>}
      {isError ? (
        <h1>Error shown using ternary operator ...</h1>
      ) : (
        <h1>There is No Error ternary operator...</h1>
      )}
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
    </>
  );
};

export default ShortCircuitEvaluation;
