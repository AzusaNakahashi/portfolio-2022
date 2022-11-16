import { useRouter } from "next/router";
import { projectsData } from "../../public/projectData/text/projects";
import styles from "../../styles/layout/project.module.scss";
import type { ReactElement } from "react";
import Layout from "../../layout/Layout";
import type { NextPageWithLayout } from "../../types/layoutType";
import type { Project } from "../../types/projectType";
import Link from "next/link";

const Project: NextPageWithLayout = () => {
  const router = useRouter();
  const index = Number(router.query.index);
  const project: Project = projectsData[index];
  let listItems: string[] = [];
  if (project?.list) {
    Object.keys(project.list).map((item) => {
      listItems = [...listItems, item];
    });
  }
  return (
    <>
      {project && (
        <>
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
            {project.features.features && (
              <section className={styles["features"]}>
                <div className={styles["background-color"]}></div>
                <div className={styles["content-wrapper"]}>
                  <h3>Features</h3>
                  <p className={styles["intro"]}>{project.features?.intro}</p>
                  <div className={styles["features-wrapper"]}>
                    {project.features?.features?.map((feature, index) => (
                      <div
                        className={styles["feature"]}
                        key={feature.keyphrase}
                      >
                        <picture>
                          <img
                            src={`/projectData/image/${
                              project.basicInfo.path
                            }/feature-${index + 1}.png`}
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
            <section className={styles["list-info"]}>
              {listItems.length > 0 && (
                <>
                  {listItems.map((item, itemIndex) => (
                    <div key={`list${itemIndex}`}>
                      {project.list[item as keyof typeof project.list].text !==
                        null && (
                        <>
                          <div className={styles["top-border"]}></div>
                          <div className={styles["list-content"]}>
                            <h3>
                              {
                                project.list[item as keyof typeof project.list]
                                  .title
                              }
                            </h3>
                            <ul>
                              {project.list[
                                item as keyof typeof project.list
                              ].text?.map((sentence, textIndex) => (
                                <li key={`sentence${textIndex}`}>{sentence}</li>
                              ))}
                            </ul>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </>
              )}
            </section>
          </div>
        </>
      )}
    </>
  );
};

Project.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Project;
