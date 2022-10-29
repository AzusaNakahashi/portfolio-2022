import Link from "next/link";
import styles from "../styles/projects.module.scss";
import { projectsData } from "../public/projectData/text/projects";
import { useState } from "react";

const Projects = () => {
  const [pathNames, setPathNames] = useState<string[]>([]);
  useState(() => {
    setPathNames(() => {
      let paths: string[] = [];
      projectsData.map((project, key) => {
        paths = [...paths, project.basicInfo.path];
      });
      return paths;
    });
  });
  return (
    <div className={styles["projects"]} id="projects">
      <div className={styles["content-wrapper"]}>
        <h2>Projects</h2>
        <div className={styles["cards-container"]}>
          {projectsData.map((project, key) => {
            return (
              <div key={key} className={styles["card"]}>
                <picture>
                  <img
                    src={`/projectData/image/${pathNames[key]}/thumbnail.png`}
                    alt="link to linkedIn"
                  />
                </picture>
                <div className={styles["app-explanation"]}>
                  <h3>{project.basicInfo.name}</h3>
                  <div className={styles["text"]}>
                    <p className={styles["app-category"]}>
                      {project.basicInfo.type}
                    </p>
                    <p>{project.basicInfo.explanation}</p>
                  </div>
                  <Link href={`/projects/${key}`}>
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
