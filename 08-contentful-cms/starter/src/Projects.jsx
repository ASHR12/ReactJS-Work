import React from "react";
import useFetchProjects from "./fetchProject";
const Projects = () => {
  const { loading, projects } = useFetchProjects();
  if (loading) {
    return <section className="loading"></section>;
  }
  //   console.log(projects);
  return (
    <section className="projects">
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline"></div>
      </div>

      <div className="projects-center">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.url}
            className="project"
            rel="noreferrer"
            target="_blank"
          >
            <img src={project.imageUrl} alt={project.title} className="img" />
            <h5>{project.title}</h5>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
