import React from "react";

// On click the value is not changed bcoz we didn't re render the component
// even if we re render the component we don't have ways to hold the value .
// This can be achieved using useState.

const ErrorExample = () => {
  let title = "Random Title";
  const handleClick = (e) => {
    title = "New Random Title";
    console.log(e);
    console.log(title);
  };
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
