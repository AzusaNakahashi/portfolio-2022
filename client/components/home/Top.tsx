import { useInView } from "react-intersection-observer";
import styles from "../../styles/layout/top.module.scss";

const Top = () => {
  const [titleRef, titleIsVisible] = useInView();
  return (
    <div
      ref={titleRef}
      className={`${styles["topPage"]} ${titleIsVisible && styles.animated}`}
      id="topPage"
    >
      <div className={styles["content-wrapper"]}>
        <div className={styles["left"]}>
          <h1 className={`${titleIsVisible && styles.animated}`}>
            Azusa Nakahashi
          </h1>
          <h2 className={`${titleIsVisible && styles.animated}`}>
            Front-end developer
          </h2>
          <p className={`${titleIsVisible && styles.animated}`}>
            I love creating solid and beautiful websites and apps using modern
            front-end technologies!
          </p>
        </div>
        <div className={styles["right"]}>
          <picture>
            <img
              className={`${titleIsVisible && styles.animated}`}
              src="/pictures/top.jpeg"
              alt="face image"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Top;
