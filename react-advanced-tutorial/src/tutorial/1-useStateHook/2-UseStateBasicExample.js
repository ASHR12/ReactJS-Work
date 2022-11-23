import React, { useState } from "react";

const UseStateBasicExample = () => {
  //   console.log(useState("hello world"));
  //   const value = useState(1)[0];
  //   const handler = useState(1)[1];
  const [text, setText] = useState("Random Title");
  const handleClick = (e) => {
    if (text === "Random Title") {
      setText("New Random Title");
    } else {
      setText("Random Title");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasicExample;
