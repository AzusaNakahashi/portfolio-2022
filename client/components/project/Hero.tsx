import Link from "next/link";
import type { Project } from "../../types/projectType";
import { useInView } from "react-intersection-observer";
import styles from "../../styles/layout/project.module.scss";

const Hero = ({ project }: { project: Project }) => {
  const { ref, inView } = useInView();
  return (
    <section className={styles["hero-section"]}>
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
          ref={ref}
          className={`${inView && styles.animated} ${styles["section-title"]}`}
        >
          {project.basicInfo.name}
        </h2>
        <p className={styles["time-frame"]}>
          Development: {project.basicInfo.duration}
        </p>
        <p className={styles["app-type"]}>{project.basicInfo.type}</p>
        <div className={styles["hero-image-phone"]}>
          <picture>
            <img
              src={`/projectData/image/${project.basicInfo.path}/hero.png`}
              alt="hero image"
            />
          </picture>
        </div>
        <p>{project.basicInfo.explanation}</p>
        {project.basicInfo?.liveURL && (
          <Link href="https://github.com/AzusaNakahashi">
            <a href={project.basicInfo.liveURL}>
              <button>Livesite </button>
            </a>
          </Link>
        )}
        {project.basicInfo?.github && (
          <Link href="https://github.com/AzusaNakahashi">
            <a href={project.basicInfo.github}>
              <button>Github </button>
            </a>
          </Link>
        )}
      </div>
    </section>
  );
};

export default Hero;
