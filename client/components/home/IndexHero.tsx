import { useInView } from "react-intersection-observer";
import styles from "../../styles/layout/indexHero.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { heroVisibilityToggle } from "../../features/elementVisibility";
import { useEffect } from "react";
import { useRouter } from "next/router";

const IndexHero = () => {
  const dispatch = useAppDispatch();
  const [componentRef, componentIsVisible] = useInView();
  const [titleRef, titleIsVisible] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (componentIsVisible) {
      dispatch(heroVisibilityToggle(true));
    } else {
      dispatch(heroVisibilityToggle(false));
    }
  });
  return (
    <div
      ref={componentRef}
      className={`${styles["topPage"]} ${titleIsVisible && styles.animated}`}
      id="topPage"
    >
      <div className={styles["content-wrapper"]}>
        <div className={styles["left"]}>
          <h1 ref={titleRef} className={`${titleIsVisible && styles.animated}`}>
            Azusa Nakahashi
          </h1>
          <h2 className={`${titleIsVisible && styles.animated}`}>
            Front-end Developer
          </h2>
        </div>
      </div>
    </div>
  );
};

export default IndexHero;
