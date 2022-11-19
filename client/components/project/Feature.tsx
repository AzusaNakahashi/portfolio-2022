import Link from "next/link";
import type { Project } from "../../types/projectType";
import { useInView } from "react-intersection-observer";
import styles from "../../styles/layout/project.module.scss";

const Feature = ({ project }: { project: Project }) => {
  const [titleRef, titleIsVisible] = useInView();
  const [featureRef, featureIsVisible] = useInView();
  return (
    <>
      {project.features.features && (
        <section className={styles["features"]}>
          <div className={styles["background-color"]}></div>
          <div className={styles["content-wrapper"]}>
            <h3
              ref={titleRef}
              className={`${styles["section-title"]} ${
                titleIsVisible && styles.animated
              } ${styles["technology"]}`}
            >
              Features
            </h3>
            <p className={styles["intro"]}>{project.features?.intro}</p>
            <div className={styles["features-wrapper"]}>
              {project.features?.features?.map((feature, index) => (
                <div className={styles["feature"]} key={feature.keyphrase}>
                  <picture>
                    <img
                      src={`/projectData/image/${
                        project.basicInfo.path
                      }/feature-${index + 1}.png`}
                      alt="hero image"
                    />
                  </picture>
                  <p
                    ref={featureRef}
                    className={`${featureIsVisible && styles.animated} ${
                      styles["keyfrase"]
                    }`}
                  >
                    {feature.keyphrase}
                  </p>
                  <p
                    className={`${styles["description"]} ${
                      featureIsVisible && styles.animated
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Feature;
