import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SocialMediaFeeds from "./components/SocialMediaFeeds";
import Skills from "./components/Skills";
import About from "./components/About";
import Backhome from "./components/Backhome";
const App = () => {
  return (
    <div className="relative" id="home">
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <SocialMediaFeeds />
      <Footer />
      <Backhome />
    </div>
  );
};

export default App;
