import type { Project } from "../../types/projectType";
import { useInView } from "react-intersection-observer";
import styles from "../../styles/layout/project.module.scss";

const Technology = ({ project }: { project: Project }) => {
  const [titleRef, titleIsVisible] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <>
      <section ref={titleRef} className={`${styles["technology"]}`}>
        <h3
          className={`${styles["section-title"]} ${
            titleIsVisible && styles.animated
          } ${styles["technology"]}`}
        >
          Technology
        </h3>
        <ul
          className={` ${styles["tech-names"]} ${
            titleIsVisible && styles.animated
          }`}
        >
          {project.technology.techs.map((name, index) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
        <ul className={styles["tech-point"]}>
          {project.technology.pointList.map((point, index) => (
            <List point={point} key={point} />
          ))}
        </ul>
      </section>
    </>
  );
};

const List = ({ point }: { point: string }) => {
  const [textRef, textIsVisible] = useInView({ triggerOnce: true });
  return (
    <li ref={textRef} className={`${textIsVisible && styles.animated}`}>
      {point}
    </li>
  );
};

export default Technology;
