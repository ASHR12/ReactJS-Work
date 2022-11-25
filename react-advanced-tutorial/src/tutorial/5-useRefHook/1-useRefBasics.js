import React, { useRef, useEffect } from "react";

const UseRefBasics = () => {
  const emailRef = useRef(null);
  const testSectionRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
  };

  // we can go without empty dependency list as well because useRef wil not rerender the component.
  useEffect(() => {
    emailRef.current.focus();
    console.log(testSectionRef.current);
    testSectionRef.current.style = { background: "blue" };
    testSectionRef.current.style.display = "inline-block";
  }, []);

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input
            className="form-input"
            type="email"
            name="email"
            id="email"
            ref={emailRef}
          />
        </div>
        <button type="submit" className="btn" style={{ marginTop: "2rem" }}>
          Subscribe
        </button>
      </form>
      <div className="test-section" ref={testSectionRef}>
        Hello-world
      </div>
    </>
  );
};

export default UseRefBasics;
