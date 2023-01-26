import type { Project } from "../../types/projectType";
import { useInView } from "react-intersection-observer";
import styles from "../../styles/layout/project.module.scss";
import { useEffect, useState } from "react";

const Feature = ({ project }: { project: Project }) => {
  const [titleRef, titleIsVisible] = useInView({ triggerOnce: true });
  const [featureRef, featureIsVisible] = useInView({ triggerOnce: true });
  const [featureCounter, setFeatureCounter] = useState(0);
  if (featureCounter === 0) {
    project?.features?.features?.map((item, index) => {
      setFeatureCounter(index + 1);
    });
  }

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
            <div
              className={
                featureCounter === 2
                  ? `${styles["features-wrapper"]} ${styles["shrink"]}`
                  : styles["features-wrapper"]
              }
            >
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
