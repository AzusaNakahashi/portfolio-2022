import styles from "../styles/main.module.scss";

const Top = () => {
  return (
    <div className={styles["topPage"]} id="topPage">
      <div className={styles["content-wrapper"]}>
        <div className={styles["left"]}>
          <h1>Azusa Nakahashi</h1>
          <h2>Front-end developer</h2>
          <p>
            I love creating solid and beautiful websites and apps using modern
            front-end technologies!
          </p>
        </div>
        <div className={styles["right"]}>
          <picture>
            <img src="/pictures/top.jpeg" alt="face image" />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Top;
