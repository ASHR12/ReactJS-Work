import React, { useState } from "react";

const MultipleInputs = () => {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [peopleList, setPeopleList] = useState([]);
  const [msgState, setMsgState] = useState(false);

  const handleMsgState = () => {
    setMsgState(true);
    setTimeout(() => {
      setMsgState(false);
    }, 1500);
  };

  const handleChange = (e) => {
    const propertyName = e.target.name;
    const propertyValue = e.target.value;
    setPerson({ ...person, [propertyName]: propertyValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.lastName && person.email) {
      const id = Math.ceil(Math.random() * 1000000000);
      const personObj = { ...person, id };
      console.log("Person Added");
      setPeopleList([...peopleList, personObj]);
      setPerson({
        firstName: "",
        lastName: "",
        email: "",
      });
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
            value={person.firstName}
            onChange={handleChange}
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
            value={person.lastName}
            onChange={handleChange}
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
            value={person.email}
            onChange={handleChange}
          />
        </div>
        <div
          className={`alert alert-success ${msgState ? `show` : `hide`}`}
          style={{ marginTop: "2rem" }}
        >
          Added Successfully
        </div>
        <button
          type="submit"
          className="btn"
          onClick={handleSubmit}
          style={{ marginTop: "2rem" }}
        >
          add person
        </button>
      </form>
      <article className="section-center">
        {peopleList.length > 0 && (
          <div className="form">
            <div className="title">
              <h1>People List</h1>
            </div>
            <div className="persons-container">
              {peopleList.map((item) => {
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

export default MultipleInputs;
