import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  // called HTML or JSX
  return (
    <div>
      <Person />
      <Info />
    </div>
  );
}

const Person = () => <h2>Ashutosh</h2>;
const Info = () => {
  return <p>THis is my first nested component.</p>;
};
ReactDom.render(<Greeting />, document.getElementById("root"));
