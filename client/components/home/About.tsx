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
    "I am a skilled full-stack developer currently residing in Vancouver, BC with experience collaborating on various team projects utilizing cutting-edge technologies such as React.js, Next.js, TypeScript, Redux, Sass, Node.js, Express, MySQL, and MongoDB. Presently, I am seeking an entry-level developer position and possess a strong aptitude for learning, with a keen interest in expanding my knowledge of new technologies.",
    "I'm open to learning anything. I am currently working on MERN stack skills. however, I am very excited with learning other languages/frameworks/library too. I am very passionate about this industry.",
    "As a developer, I approach problem-solving with a meticulous attention to detail, carefully considering the root cause of issues, consulting relevant documentation, conducting extensive research, and ultimately choosing the optimal solution for each project. This approach enables me to not only develop effective solutions but also continuously improve my code readability.",
    "In addition, I have developed extensive drawing skills through my personal hobby, which have greatly enhanced my ability to comprehend design concepts with ease. While I am proficient in utilizing libraries for design purposes, my proficiency in accurately reproducing intricate designs using pure CSS, without any reliance on external libraries, has significantly expedited the front-end development process.",
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
