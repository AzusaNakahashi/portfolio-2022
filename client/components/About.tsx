import styles from "../styles/about.module.scss";
import { useInView } from "react-intersection-observer";

const About = () => {
  //const ref = useRef<HTMLDivElement>(null);
  const { ref: wrapperRef, inView: wrapperIsVisible } = useInView({
    threshold: 0.2,
    //triggerOnce: true,
  });
  const { ref: headingRef, inView: headingIsVisible } = useInView({
    threshold: 0.2,
    //triggerOnce: true,
  });
  const { ref: textRef, inView: textIsVisible } = useInView({
    threshold: 0.3,
    //triggerOnce: true,
  });
  const { ref: buttonRef, inView: buttonIsVisible } = useInView({
    threshold: 0.5,
    //triggerOnce: true,
  });
  const { ref: skillsRef, inView: skillsIsVisible } = useInView({
    threshold: 0.4,
    //triggerOnce: true,
  });
  // Content Text
  const text: string[] = [
    "Hi! I'm Azusa, a front-end developer based in Vancouver.",
    "I'm passionate about creating apps with modern front-end Technologies and delivering excellent user experience.",
    "I have a solid knowledge of HTML, CSS (Sass), and JavaScript, and I have worked on multiple projects with React.js and Node.js. As a developer, I prioritize readability.",
    "I always try to write clean and manageable code.",
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

  return (
    <div ref={wrapperRef} className={styles["about"]} id="about">
      <div className={styles["content-wrapper"]}>
        <h2
          ref={headingRef}
          className={`${headingIsVisible && styles.animated}`}
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
          <button
            ref={buttonRef}
            className={`${buttonIsVisible && styles.animated}`}
          >
            Resume
          </button>
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
