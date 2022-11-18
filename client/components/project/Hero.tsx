import Link from "next/link";
import type { Project } from "../../types/projectType";
import { useInView } from "react-intersection-observer";
import styles from "../../styles/layout/project.module.scss";

const Hero = ({ project }: { project: Project }) => {
  const [titleRef, titleIsVisible] = useInView();
  const [textRef, textIsVisible] = useInView();
  const [buttonRef, buttonIsVisible] = useInView();
  return (
    <section className={styles["hero-section"]} ref={titleRef}>
      <div className={styles["hero-image-desktop"]}>
        <picture>
          <img
            src={`/projectData/image/${project.basicInfo.path}/hero.png`}
            alt="hero image"
          />
        </picture>
      </div>
      <div className={styles["text"]}>
        <h2
          className={`${titleIsVisible && styles.animated} ${
            styles["section-title"]
          }`}
        >
          {project.basicInfo.name}
        </h2>
        <p
          className={`${titleIsVisible && styles.animated} ${
            styles["time-frame"]
          }`}
        >
          Development: {project.basicInfo.duration}
        </p>
        <p
          className={`${titleIsVisible && styles.animated} ${
            styles["app-type"]
          }`}
        >
          {project.basicInfo.type}
        </p>
        <div className={styles["hero-image-phone"]}>
          <picture className={`${titleIsVisible && styles.animated}`}>
            <img
              className={`${titleIsVisible && styles.animated}`}
              src={`/projectData/image/${project.basicInfo.path}/hero.png`}
              alt="hero image"
            />
          </picture>
        </div>
        <p
          ref={textRef}
          className={`${styles["description"]} ${
            textIsVisible && styles.animated
          }`}
        >
          {project.basicInfo.explanation}
        </p>
        {project.basicInfo?.liveURL && (
          <Link href="https://github.com/AzusaNakahashi">
            <a href={project.basicInfo.liveURL}>
              <button
                ref={buttonRef}
                className={`${buttonIsVisible && styles.animated}`}
              >
                Livesite{" "}
              </button>
            </a>
          </Link>
        )}
        {project.basicInfo?.github && (
          <Link href="https://github.com/AzusaNakahashi">
            <a href={project.basicInfo.github}>
              <button
                ref={buttonRef}
                className={`${buttonIsVisible && styles.animated}`}
              >
                Github{" "}
              </button>
            </a>
          </Link>
        )}
      </div>
    </section>
  );
};

export default Hero;
