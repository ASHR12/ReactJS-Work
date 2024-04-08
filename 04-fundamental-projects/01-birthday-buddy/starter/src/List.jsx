// List.jsx
import React from "react";
import Person from "./Person";

function List({ people }) {
  return (
    <>
      {people.map((person) => (
        <Person key={person.id} {...person} />
      ))}
    </>
  );
}

export default List;
