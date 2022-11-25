import React, { useState } from "react";

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);
  const [msgState, setMsgState] = useState(false);

  const handleMsgState = () => {
    setMsgState(true);
    setTimeout(() => {
      setMsgState(false);
    }, 1500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && email) {
      const id = Math.ceil(Math.random() * 1000000000);
      const personObj = { id, firstName, lastName, email };
      console.log("Person Added");
      setPeople((people) => {
        return [...people, personObj];
      });
      setFirstName("");
      setLastName("");
      setEmail("");
      handleMsgState();
    } else {
      console.log("Empty Values");
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label className="form-label" htmlFor="firstName">
            First Name:
          </label>
          <input
            className="form-input"
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="lastName">
            Last Name:
          </label>
          <input
            className="form-input"
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input
            className="form-input"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div
          className={`alert alert-success ${msgState ? `show` : `hide`}`}
          style={{ marginTop: "2rem" }}
        >
          Added Successfully
        </div>
        <button type="submit" className="btn" style={{ marginTop: "2rem" }}>
          add person
        </button>
      </form>
      <article className="section-center">
        {people.length > 0 && (
          <div className="form">
            <div className="title">
              <h1>People List</h1>
            </div>
            <div className="persons-container">
              {people.map((item) => {
                return (
                  <div className="person" key={item.id}>
                    <p>{item.firstName}</p>
                    <p>{item.lastName}</p>
                    <p>{item.email}</p>
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

export default ControlledInputs;
