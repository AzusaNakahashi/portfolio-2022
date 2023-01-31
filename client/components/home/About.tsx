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
    "Vancouver-based full-stack (React.js and Node.js) web development graduate with excellent understanding in design from Langara College (GPA 3.6), seeking an entry-level front-end/full-stack developer position.",
    "I'm open to learning anything. I am currently working on front-end skills, especially building web applications with React.js (Next.js), however, I am very excited with learning other languages/frameworks/library too. I am very passionate about this industry.",
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
