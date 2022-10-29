import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { projectsData } from "../../public/projectData/text/projects";
import styles from "../../styles/project.module.scss";

const Project = () => {
  const router = useRouter();
  const index = Number(router.query.index);
  const project = projectsData[index];
  useEffect(() => {});
  return (
    <>
      {project && (
        <>
          <Header />
          <main>
            <div className={styles["project"]}>
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
                  <h2>{project.basicInfo.name}</h2>
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
                    <button>
                      <a href={project.basicInfo.liveURL}>Livesite</a>
                    </button>
                  )}
                  {project.basicInfo?.github && (
                    <button>
                      <a href={project.basicInfo.github}>Github</a>
                    </button>
                  )}
                </div>
              </section>
              {project.features.features && (
                <section className={styles["features"]}>
                  <div className={styles["background-color"]}></div>
                  <div className={styles["content-wrapper"]}>
                    <h3>Features</h3>
                    <p className={styles["intro"]}>{project.features?.intro}</p>
                    <div className={styles["features-wrapper"]}>
                      {project.features?.features?.map((feature, key) => (
                        <div className={styles["feature"]} key={key}>
                          <picture>
                            <img
                              src={`/projectData/image/${project.basicInfo.path}/hero.png`}
                              alt="hero image"
                            />
                          </picture>
                          <p className={styles["keyfrase"]}>
                            {feature.keyphrase}
                          </p>
                          <p className={styles["description"]}>
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}
              <section className={styles["technology"]}>
                <h3>Technology</h3>
                <ul className={styles["tech-names"]}>
                  {project.technology.techs.map((name, key) => (
                    <li key={key}>{name}</li>
                  ))}
                </ul>
                <ul className={styles["tech-point"]}>
                  {project.technology.pointList.map((point, key) => (
                    <li key={key}>{point}</li>
                  ))}
                </ul>
              </section>
              <section className={styles["list-info"]}>
                <div className={styles["top-border"]}></div>
                <div className={styles["list-content"]}>
                  <h3>Motive</h3>
                  <ul>
                    {project.list?.motive?.map((motive, key) => (
                      <li key={key}>{motive}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles["top-border"]}></div>
                <div className={styles["list-content"]}>
                  <h3>Tech Goals</h3>
                  <ul>
                    {project.list?.techGoal?.map((goal, key) => (
                      <li key={key}>{goal}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles["top-border"]}></div>
                <div className={styles["list-content"]}>
                  <h3>Project Management</h3>
                  <ul>
                    {project.list?.projectManagement?.map((item, key) => (
                      <li key={key}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles["top-border"]}></div>
              </section>
            </div>
          </main>
          <footer>
            <h3>©2022 Azusa Nakahashi</h3>
          </footer>
        </>
      )}
    </>
  );
};

export default Project;
