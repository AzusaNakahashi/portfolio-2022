import { useState } from "react";
import text from "../public/indexPageText";
import styles from "../styles/about.module.scss";

const About = () => {
  const [openPage, setOpenPage] = useState(0);
  return (
    <div className={styles["about"]} id="about">
      <div className={styles["content-wrapper"]}>
        <h2>About</h2>
        <div className={styles["text-container"]}>
          <div className={styles["text"]}>
            {text.data.about.map((page, key) => {
              return (
                <div
                  key={key}
                  className={`${styles[`page-${key}`]}  ${
                    key === openPage ? styles["open"] : styles["close"]
                  }`}
                >
                  {page.map((paragraph, key) => {
                    return <p key={key}>{paragraph}</p>;
                  })}
                </div>
              );
            })}
          </div>
          <div className={styles["page-controller"]}>
            <p
              className={`${styles["previous-btn"]} ${
                openPage === 0 ? styles["close"] : styles["open"]
              }`}
              onClick={() => {
                console.log("clicked");
                if (openPage === 1) {
                  setOpenPage(openPage - 1);
                }
              }}
            >
              {"← previous page"}
            </p>{" "}
            <p
              className={`${styles["next-btn"]} ${
                openPage === 0 ? styles["open"] : styles["close"]
              }`}
              onClick={() => {
                if (openPage === 0) {
                  setOpenPage(openPage + 1);
                }
              }}
            >
              {"next page →"}
            </p>
          </div>
        </div>
        <div className={styles["skills"]}>
          <h2>Skills</h2>
          <div className={styles["cards-wrapper"]}>
            <div className={styles["tech-card"]}>
              <picture>
                <img src="/techLogos/html5.svg" alt={"html 5 logo"} />
              </picture>
              <p>HTML5</p>
            </div>
            <div className={styles["tech-card"]}>
              <picture>
                <img src="/techLogos/css.svg" alt={"css logo"} />
              </picture>
              <p>CSS</p>
            </div>
            <div className={styles["tech-card"]}>
              <picture>
                <img src="/techLogos/js.svg" alt={"javascript logo"} />
              </picture>
              <p>JavaScript</p>
            </div>
            <div className={styles["tech-card"]}>
              <picture>
                <img src="/techLogos/react.svg" alt={"react logo"} />
              </picture>
              <p>React.js</p>
            </div>
            <div className={styles["tech-card"]}>
              <picture>
                <img src="/techLogos/redux.svg" alt={"redux logo"} />
              </picture>
              <p>Redux</p>
            </div>

            <div className={styles["tech-card"]}>
              <picture>
                <img src="/techLogos/firebase.svg" alt={"firebase logo"} />
              </picture>
              <p>Firebase</p>
            </div>
            <div className={styles["tech-card"]}>
              <picture>
                <img src="/techLogos/git.svg" alt={"git logo"} />
              </picture>
              <p>Git</p>
            </div>
            <div className={styles["tech-card"]}>
              <picture>
                <img
                  src="/techLogos/node.svg"
                  alt={"node.js logo"}
                  className={styles["node-logo"]}
                />
              </picture>
              <p>Node.js</p>
            </div>
            <div className={styles["tech-card"]}>
              <picture>
                <img
                  src="/techLogos/mysql.png"
                  alt={"mySQL logo"}
                  className={styles["mysql-logo"]}
                />
              </picture>
              <p>MySQL</p>
            </div>
            <div className={styles["tech-card"]}>
              <picture>
                <img
                  src="/techLogos/mongoDB.svg"
                  alt={"mongo db logo"}
                  className={styles["mongo-logo"]}
                />
              </picture>
              <p>MongoDB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
