import heroImg from "../assets/hero2.svg";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="bg-purple-200  py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">I'm Ashutosh</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Software Engineer and AI Enthusiast
          </p>
          <p className="mt-2 text-lg text-slate-700 tracking-wide">
            I write and make videos about AI
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="http://x.com/ai_for_success" target="_blank">
              <FaXTwitter className="h-8 w-8 text-slate-500 hover:text-purple-800 duration-300" />
            </a>
            <a href="https://www.youtube.com/@AIForSuccess" target="_blank">
              <FaYoutube className="h-8 w-8 text-slate-500 hover:text-purple-800 duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" alt="hero" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
