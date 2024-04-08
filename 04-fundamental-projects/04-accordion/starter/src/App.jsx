// App.jsx
import React, { useState } from "react";
import questions from "./data";
import SingleQuestion from "./SingleQuestion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function App() {
  return (
    <main>
      <div className="container">
        <h1>Questions</h1>
        <section className="info">
          {questions.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;
