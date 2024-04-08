// ColorList.jsx
import React from "react";
import SingleColor from "./SingleColor";
import { nanoid } from "nanoid";
function ColorList({ colors }) {
  return (
    <section className="colors">
      {colors.map((color, index) => (
        <SingleColor key={nanoid()} {...color} index={index} />
      ))}
    </section>
  );
}

export default ColorList;
