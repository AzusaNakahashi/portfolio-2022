import { useInView } from "react-intersection-observer";
import styles from "../../styles/layout/indexHero.module.scss";

const Top = () => {
  const [titleRef, titleIsVisible] = useInView({ triggerOnce: true });
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
        </div>
      </div>
    </div>
  );
};

export default Top;
