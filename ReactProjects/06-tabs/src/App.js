import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Error from "./Error";
import { FaAngleDoubleRight } from "react-icons/fa";
function App() {
  const [loading, setIsLoading] = useState(true);
  const [dataValue, setDataValue] = useState([]);
  const [isError, setIsError] = useState(false);
  const [value, setValue] = useState(0);
  const url = "https://course-api.com/react-tabs-project";
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (response.status >= 200 && response.status <= 299) {
        const data = await response.json();
        setDataValue(data);
        setIsLoading(false);
        setIsError(false);
      } else {
        setIsLoading(false);
        setIsError(true);
        throw new Error(response.statusText);
      }
      // Import tp set useEffect with empty dependency list else it will trigger chain .
    } catch (error) {
      console.log("Error", error);
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  if (isError) {
    return (
      <>
        <Error />
      </>
    );
  }
  const { company, dates, duties, title } = dataValue[value];
  return (
    <>
      <div className="section-center">
        <div className="title">
          <h1>Experience</h1>
          <div className="title-underline"></div>
        </div>
        <div className="experience-container">
          <div className="btn-container">
            {dataValue.map((item, index) => {
              return (
                <button
                  key={index}
                  type="button"
                  className={`text-btn ${value === index && `active`}`}
                  onClick={() => setValue(index)}
                >
                  {item.company}
                </button>
              );
            })}
          </div>
          <div className="data-container">
            <h4 className="job-title">{title}</h4>
            <h5 className="company">{company}</h5>
            <p className="duration">{dates}</p>
            <section className="duties">
              {duties.map((item, index) => {
                return (
                  <div key={index} className="job-desc">
                    <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                    <p>{item}</p>
                  </div>
                );
              })}
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
