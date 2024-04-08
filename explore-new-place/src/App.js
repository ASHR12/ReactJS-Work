import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      {/* <!-- header  --> */}
      <header id="home">
        {/* nav */}
        <Navbar />
        {/* hero */}
        <Hero />
      </header>
      {/* <!-- end of header  --> */}

      {/* About about */}
      <About />
      {/* services */}
      <Services />
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
