import type { Project } from "../../types/projectType";
import { useInView } from "react-intersection-observer";
import styles from "../../styles/layout/project.module.scss";

const Lists = ({ project }: { project: Project }) => {
  let listItems: string[] = [];
  if (project?.list) {
    Object.keys(project.list).map((item) => {
      listItems = [...listItems, item];
    });
  }
  return (
    <>
      <section className={styles["list-info"]}>
        {listItems.length > 0 && (
          <>
            {listItems.map((item, itemIndex) => (
              <List project={project} item={item} key={itemIndex} />
            ))}
          </>
        )}
      </section>
    </>
  );
};

const List = ({ project, item }: { project: Project; item: string }) => {
  const { ref: titleRef, inView: titleIsVisible } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  return (
    <div>
      {project.list[item as keyof typeof project.list].text !== null && (
        <>
          <div className={styles["top-border"]}></div>
          <div className={styles["list-content"]}>
            <h3
              ref={titleRef}
              className={`${styles["section-title"]} ${
                titleIsVisible && styles.animated
              }`}
            >
              {project.list[item as keyof typeof project.list].title}
            </h3>
            <ul>
              {project.list[item as keyof typeof project.list].text?.map(
                (sentence, textIndex) => (
                  <li key={`sentence${textIndex}`}>{sentence}</li>
                )
              )}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Lists;
