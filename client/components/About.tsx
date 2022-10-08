import { useState } from "react";
import text from "../public/text";
import styles from "../styles/about.module.scss";
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
      <div className="skills"></div>
    </div>
  );
};

export default About;
