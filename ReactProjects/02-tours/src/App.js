import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours.js";
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const [isError, setIsError] = useState(false);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (response.status >= 200 && response.status <= 299) {
        const data = await response.json();
        setTours(data);
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
    fetchTours();
  }, []);

  if (loading) {
    return (
      <>
        <Loading></Loading>
      </>
    );
  }
  if (isError) {
    return (
      <>
        <div>
          <h1>Error....</h1>
        </div>
      </>
    );
  }
  if (tours.length === 0) {
    return (
      <>
        <section className="main-section">
          <div className="title">
            <h1>No Tours left</h1>
            <div className="title-underline"></div>
          </div>
        </section>
        <section class="tours-container section-center">
          <button type="button" className="btn" onClick={fetchTours}>
            refresh
          </button>
        </section>
      </>
    );
  }
  return (
    <>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </>
  );
}

export default App;
