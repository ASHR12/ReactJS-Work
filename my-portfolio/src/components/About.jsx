import SectionTitle from "./SectionTitle";
import aboutSvg from "../assets/about2.svg";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} alt="about" className="w-full h-64" />
        <article>
          <SectionTitle text="About me" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            doloribus rem perferendis placeat reiciendis consequuntur amet illum
            animi ad illo? A, totam. Ducimus accusantium veritatis itaque, porro
            consequuntur sit quidem!
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
