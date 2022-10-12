import Image from "next/image";
import allText from "../public/text";
import image from "../public/pictures/top.jpeg";
import styles from "../styles/projects.module.scss";

const Projects = () => {
  const projectsText = allText.data.projects;
  return (
    <div className={styles["projects"]} id="projects">
      <div className={styles["content-wrapper"]}>
        <h2>Projects</h2>
        <div className={styles["cards-container"]}>
          {projectsText.map((project, key) => {
            return (
              <div key={key} className={styles["card"]}>
                <Image src={image} alt="app image" />
                <div className={styles["app-explanation"]}>
                  <h3>{project.title}</h3>
                  <div className={styles["text"]}>
                    <p className={styles["app-category"]}>{project.category}</p>
                    <p>{project.text}</p>
                  </div>
                  <button>see more</button>
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
