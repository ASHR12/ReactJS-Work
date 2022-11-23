import React from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
const Question = ({ title, info, index, activeIndex, setActiveIndex }) => {
  return (
    <>
      <div className="question">
        <div className="question-desc">
          <p>{title}</p>

          {index === activeIndex ? (
            <button
              type="button"
              onClick={() => setActiveIndex()}
              className="question-btn"
            >
              <AiOutlineMinusCircle />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className="question-btn"
            >
              <AiOutlinePlusCircle />
            </button>
          )}
        </div>
        <div className={`answer-desc ${index === activeIndex ? "active" : ""}`}>
          <p>{info}</p>
        </div>
      </div>
    </>
  );
};

export default Question;
