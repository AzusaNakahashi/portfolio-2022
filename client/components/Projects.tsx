import Image from "next/image";
import allText from "../public/text";
import image from "../public/pictures/top.jpeg";

const Projects = () => {
  const projectsText = allText.data.projects;
  return (
    <div>
      <h2>Projects</h2>
      <div>
        {projectsText.map((project, key) => {
          return (
            <div key={key}>
              <Image src={image} alt="app image" />
              <h3>{project.title}</h3>
              <p>{project.category}</p>
              <p>{project.text}</p>
              <button>see more</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
