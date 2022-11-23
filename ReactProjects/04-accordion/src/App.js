import React, { useState } from "react";
import Question from "./Question";
import Questions from "./data";
function App() {
  const [activeIndex, setActiveIndex] = useState(-1);
  console.log("activeIndex", activeIndex);
  return (
    <>
      <section className="questions section-center">
        <h1 className="title">General Question</h1>
        <div className="question-container">
          {Questions.map((question, index) => {
            return (
              <Question
                key={question.id}
                {...question}
                index={index}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              ></Question>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default App;
