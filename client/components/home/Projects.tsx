import { useState } from "react";
import Link from "next/link";
import { projectsData } from "../../public/projectData/text/projects";
import type { Project } from "../../types/projectType";
import { useInView } from "react-intersection-observer";
import styles from "../../styles/layout/projects.module.scss";

const Projects = () => {
  const { ref: headingRef, inView: headingIsVisible } = useInView({
    threshold: 0.2,
    //triggerOnce: true,
  });
  return (
    <div className={styles["projects"]} id="projects">
      <div className={styles["content-wrapper"]}>
        <h2
          ref={headingRef}
          className={`${styles["section-title"]} ${
            headingIsVisible && styles.animated
          }`}
        >
          Projects
        </h2>
        <div className={styles["cards-container"]}>
          {projectsData.map((project, index) => {
            return <ProjectCard project={project} index={index} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const { ref, inView } = useInView();
  const [pathNames, setPathNames] = useState<string[]>([]);
  useState(() => {
    setPathNames(() => {
      let paths: string[] = [];
      projectsData.map((project) => {
        paths = [...paths, project.basicInfo.path];
      });
      return paths;
    });
  });
  return (
    <div
      ref={ref}
      key={`project${index}`}
      className={`${styles["card"]} ${inView && styles.animated}`}
    >
      <picture>
        <img
          src={`/projectData/image/${pathNames[index]}/thumbnail.png`}
          alt="app thumbnail"
        />
      </picture>
      <div className={styles["app-explanation"]}>
        <h3>{project.basicInfo.name}</h3>
        <div className={styles["text"]}>
          <p className={styles["app-category"]}>{project.basicInfo.type}</p>
          <p>{project.basicInfo.explanation}</p>
          <ul>
            {project.technology.techs.map((tech, techIndex) => (
              <li key={`tech${techIndex}`}>{tech}</li>
            ))}
          </ul>
        </div>
        <Link href={`/projects/${index}`}>
          <button>see more</button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
