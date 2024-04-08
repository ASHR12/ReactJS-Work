// PeopleList.js
import React, { useReducer, useCallback } from "react";

const initialState = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

function reducer(state, action) {
  switch (action.type) {
    case "remove":
      return state.filter((person) => person.id !== action.id);
    default:
      throw new Error();
  }
}

const Person = React.memo(({ person, onRemove }) => {
  console.log("Rendering:", person.name); // For demonstration
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {person.name}
      <button className="btn btn-danger" onClick={() => onRemove(person.id)}>
        Remove
      </button>
    </li>
  );
});

function PeopleList() {
  const [people, dispatch] = useReducer(reducer, initialState);

  const handleRemove = useCallback((id) => {
    dispatch({ type: "remove", id });
  }, []);

  return (
    <>
      <h2>People List</h2>
      <ul className="list-group">
        {people.map((person) => (
          <Person key={person.id} person={person} onRemove={handleRemove} />
        ))}
      </ul>
    </>
  );
}

export default PeopleList;
