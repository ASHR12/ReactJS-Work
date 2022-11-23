import React from "react";

const UseStateObjectExample = () => {
  const [person, setPerson] = React.useState({
    name: "Ashutosh",
    age: 31,
    message: "Welcome to React Course",
  });

  const changeValue = () => {
    setPerson({ ...person, age: "32", message: "Message Changed" });
  };
  return (
    <>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.message}</h2>
      <button type="button" className="btn" onClick={changeValue}>
        Change Value
      </button>
    </>
  );
};

export default UseStateObjectExample;
