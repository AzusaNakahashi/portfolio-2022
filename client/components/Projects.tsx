import { useState } from "react";
import Link from "next/link";
import { projectsData } from "../public/projectData/text/projects";
import { useInView } from "react-intersection-observer";
import styles from "../styles/projects.module.scss";

const Projects = () => {
  const [pathNames, setPathNames] = useState<string[]>([]);
  const { ref: headingRef, inView: headingIsVisible } = useInView({
    threshold: 0.2,
    //triggerOnce: true,
  });
  console.log(headingIsVisible);
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
    <div className={styles["projects"]} id="projects">
      <div className={styles["content-wrapper"]}>
        <h2
          ref={headingRef}
          className={`${headingIsVisible && styles.animated}`}
        >
          Projects
        </h2>
        <div className={styles["cards-container"]}>
          {projectsData.map((project, index) => {
            return (
              <div key={`project${index}`} className={styles["card"]}>
                <picture>
                  <img
                    src={`/projectData/image/${pathNames[index]}/thumbnail.png`}
                    alt="app thumbnail"
                  />
                </picture>
                <div className={styles["app-explanation"]}>
                  <h3>{project.basicInfo.name}</h3>
                  <div className={styles["text"]}>
                    <p className={styles["app-category"]}>
                      {project.basicInfo.type}
                    </p>
                    <p>{project.basicInfo.explanation}</p>
                    <ul>
                      {project.technology.techs.map((tech, index) => (
                        <li key={`tech${index}`}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                  <Link href={`/projects/${index}`}>
                    <button>see more</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
