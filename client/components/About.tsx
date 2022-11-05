import styles from "../styles/about.module.scss";

const About = () => {
  const text: string[] = [
    "Hi! I'm Azusa, a front-end developer based in Vancouver.",
    "I'm passionate about creating apps with modern front-end Technologies and delivering excellent user experience.",
    "I have a solid knowledge of HTML, CSS (Sass), and JavaScript, and I have worked on multiple projects with React.js and Node.js. As a developer, I prioritize readability.",
    "I always try to write clean and manageable code.",
  ];

  interface Tech {
    name: string;
    path: string;
    class?: string;
  }

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
    <div className={styles["about"]} id="about">
      <div className={styles["content-wrapper"]}>
        <h2>About</h2>
        <div className={styles["text-container"]}>
          <div className={styles["text"]}>
            {text.map((sentence, index) => (
              <p key={`sentece${index}`}>{sentence}</p>
            ))}
          </div>
          <button>Resume</button>
        </div>
        <div className={styles["skills"]}>
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
