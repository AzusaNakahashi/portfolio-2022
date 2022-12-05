import styles from "../../styles/layout/about.module.scss";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks";
import { aboutVisibilityToggle } from "../../features/elementVisibility";

const About = () => {
  const dispatch = useAppDispatch();
  const [componentRef, componentIsVisible] = useInView();
  const [headingRef, headingIsVisible] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [textRef, textIsVisible] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [buttonRef, buttonIsVisible] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [skillsRef, skillsIsVisible] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  // Content Text
  const text: string[] = [
    "Hi! I'm Azusa, a Vancouver-based frontend developer with a passion for creating apps and delivering excellent user experience.",
    "Currently, my favourite frontend development tool is React.js. I have worked on multiple school projects with Redux and Node.js along with React.js.",
    "Readability is a high priority for me. I always try to keep my code clean and manageable.",
    "Striving to grow as a web developer, I love learning and, whenever I can, investigate up-and-coming technologies.",
  ];

  type Tech = {
    name: string;
    path: string;
    class?: string;
  };

  const techNames: Tech[] = [
    { name: "HTML", path: "html5.svg" },
    { name: "CSS", path: "css.svg" },
    { name: "JavaScript", path: "js.svg" },
    { name: "React.js", path: "react.svg" },
    { name: "Redux", path: "redux.svg" },
    { name: "Firebase", path: "firebase.svg" },
    { name: "Git", path: "git.svg" },
    { name: "Node.js", path: "node.svg", class: "node" },
    { name: "MySQL", path: "mysql.png" },
    { name: "MongoDB", path: "mongoDB.svg" },
  ];

  useEffect(() => {
    if (componentIsVisible) {
      dispatch(aboutVisibilityToggle(true));
    } else {
      dispatch(aboutVisibilityToggle(false));
    }
  });

  return (
    <div ref={componentRef} className={styles["about"]} id="about">
      <div className={styles["content-wrapper"]}>
        <h2
          ref={headingRef}
          className={`${styles["section-title"]} ${
            headingIsVisible && styles.animated
          }`}
        >
          About
        </h2>
        <div ref={textRef} className={styles["text-container"]}>
          <div
            className={`${styles["text"]} ${textIsVisible && styles.animated}`}
          >
            {text.map((sentence) => (
              <p key={sentence}>{sentence}</p>
            ))}
          </div>
          <Link href="/resume/azusa-nakahashi-resume.pdf">
            <a download target="_blank" rel="noopener">
              <button
                ref={buttonRef}
                className={`${buttonIsVisible && styles.animated}`}
              >
                Resume
              </button>
            </a>
          </Link>
        </div>
        <div
          ref={skillsRef}
          className={`${styles["skills"]} ${
            skillsIsVisible && styles.animated
          }`}
        >
          <div className={styles["cards-wrapper"]}>
            {techNames.map((tech, index) => (
              <div key={`tech${index}`} className={styles["tech-card"]}>
                <picture>
                  <img
                    src={`/techLogos/${tech.path}`}
                    alt={"Tech logo"}
                    className={
                      tech.class ? styles[tech.class] : styles[tech.name]
                    }
                  />
                </picture>
                <p>{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
