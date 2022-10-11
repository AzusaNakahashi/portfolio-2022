import Image from "next/image";
import { useState } from "react";
import text from "../public/text";
import styles from "../styles/about.module.scss";
import html5Logo from "../public/techLogos/html5.svg";
import cssLogo from "../public/techLogos/css.svg";
import jsLogo from "../public/techLogos/js.svg";
import reduxLogo from "../public/techLogos/redux.svg";
import sassLogo from "../public/techLogos/sass.svg";
import nodeLogo from "../public/techLogos/node.svg";
import sqlLogo from "../public/techLogos/mysql.png";
import mongoLogo from "../public/techLogos/mongoDB.svg";
import firebaseLogo from "../public/techLogos/firebase.svg";
import reactLogo from "../public/techLogos/react.svg";
import gitLogo from "../public/techLogos/git.svg";

const About = () => {
  const [openPage, setOpenPage] = useState(0);
  return (
    <div className={styles["about"]} id="about">
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
        <div className={styles["tech-card"]}>
          <img src="/techLogos/html5.svg" alt={"html 5 logo"} />
          <p>HTML5</p>
        </div>
        <div className={styles["tech-card"]}>
          <img src="/techLogos/css.svg" alt={"css logo"} />
          <p>CSS</p>
        </div>
        <div className={styles["tech-card"]}>
          <img src="/techLogos/js.svg" alt={"javascript logo"} />
          <p>JavaScript</p>
        </div>
        <div className={styles["tech-card"]}>
          <img src="/techLogos/react.svg" alt={"react logo"} />
          <p>React.js</p>
        </div>
        <div className={styles["tech-card"]}>
          <img src="/techLogos/redux.svg" alt={"redux logo"} />
          <p>Redux</p>
        </div>
        <div className={styles["tech-card"]}>
          <img src="/techLogos/firebase.svg" alt={"firebase logo"} />
          <p>Firebase</p>
        </div>
        <div className={styles["tech-card"]}>
          <img src="/techLogos/git.svg" alt={"git logo"} />
          <p>Git</p>
        </div>
        <div className={styles["tech-card"]}>
          <img
            src="/techLogos/node.svg"
            alt={"node.js logo"}
            className={styles["node-logo"]}
          />
          <p>Node.js</p>
        </div>
        <div className={styles["tech-card"]}>
          <img
            src="/techLogos/mysql.png"
            alt={"mySQL logo"}
            className={styles["mysql-logo"]}
          />
          <p>MySQL</p>
        </div>
        <div className={styles["tech-card"]}>
          <img
            src="/techLogos/mongoDB.svg"
            alt={"mongo db logo"}
            className={styles["mongo-logo"]}
          />
          <p>MongoDB</p>
        </div>
      </div>
    </div>
  );
};

export default About;
