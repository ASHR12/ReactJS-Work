import Review from "./Review";

function App() {
  return (
    <>
      <main className="section-center">
        <section className="main-section">
          <div className="title">
            <h1>our reviews</h1>
            <div className="title-underline"></div>
          </div>
        </section>
        <section className="reviews-container section-center">
          <Review></Review>
        </section>
      </main>
    </>
  );
}

export default App;
