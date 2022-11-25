import React, { useState, useEffect } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";
import randomHexColor from "./randomHexUtils.js";
function App() {
  let randomHexValue = randomHexColor();
  console.log(randomHexColor);
  const [color, setColor] = useState(randomHexValue);
  const [weight, setWeight] = useState(10);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(new Values(randomHexValue).all(weight));
  }, []);

  const handleSubmit = (e) => {
    console.log(weight);
    setError(false);
    e.preventDefault();
    // console.log("Handle Submit");
    try {
      let colors = new Values(color).all(weight);
      setList(colors);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <>
      <div className="header-section section-center">
        <div className="title">
          <h2 style={{ color: `${color}` }}>Color Generator</h2>
          <div
            className="title-underline"
            style={{ background: `${color}` }}
          ></div>
        </div>
        <form className="color-generator-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="hexValue" className="form-label">
              Hex Code
            </label>
            <input
              className={`form-input ${error ? `input-error` : ``}`}
              type="text"
              name="hexValue"
              id="hexValue"
              placeholder="#f15025"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          <div className="form-row">
            <label htmlFor="weight" className="form-label">
              Weight
            </label>
            <input
              type="number"
              step="5"
              min="5"
              max="100"
              value={weight}
              name="weight"
              id="weight"
              className="form-input "
              onChange={(e) => setWeight(parseInt(e.target.value))}
            />
          </div>
          <button type="submit" className="btn">
            generate
          </button>
        </form>
      </div>
      <div className="section-center colors">
        {list.map((color, index) => {
          console.log(color);
          return (
            <SingleColor
              key={index}
              {...color}
              hex={color.hex}
              index={index}
              midIndex={Math.floor(list.length / 2)}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
