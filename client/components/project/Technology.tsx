import Link from "next/link";
import type { Project } from "../../types/projectType";
import { useInView } from "react-intersection-observer";
import styles from "../../styles/layout/project.module.scss";

const Technology = ({ project }: { project: Project }) => {
  const { ref: titleRef, inView: titleIsVisible } = useInView();
  return (
    <>
      <section className={`${styles["technology"]}`}>
        <h3
          ref={titleRef}
          className={`${styles["section-title"]} ${
            titleIsVisible && styles.animated
          } ${styles["technology"]}`}
        >
          Technology
        </h3>
        <ul className={styles["tech-names"]}>
          {project.technology.techs.map((name, index) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
        <ul className={styles["tech-point"]}>
          {project.technology.pointList.map((point, index) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Technology;
