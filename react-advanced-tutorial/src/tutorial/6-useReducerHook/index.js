import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../data";
// reducer function
import { reducer } from "./reducer";
const Index = () => {
  const [name, setName] = useState("");

  const defaultState = {
    people: data,
    isModalOpen: false,
    modalContent: "i am Modal",
  };
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newPerson = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newPerson });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  return (
    <>
      <div className="title">
        <h1>Use Reducer</h1>
      </div>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label className="form-label" htmlFor="fname">
            Person:
          </label>
          <input
            className="form-input"
            type="text"
            name="fname"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn" style={{ marginTop: "2rem" }}>
          Add
        </button>
      </form>
      <article className="section-center">
        {state.people.length > 0 && (
          <div className="form">
            <div className="title">
              <h1>People List</h1>
            </div>
            <div className="people-container">
              {state.people.map((item) => {
                return (
                  <div className="people" key={item.id}>
                    <p>{item.name}</p>
                    <button
                      type="button"
                      className="btn"
                      onClick={() =>
                        dispatch({ type: "REMOVE_ITEM", payload: item.id })
                      }
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </article>
    </>
  );
};

export default Index;
