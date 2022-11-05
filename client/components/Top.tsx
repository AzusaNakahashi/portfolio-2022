import text from "../public/indexPageText";
import Image from "next/image";
import topImage from "../public/pictures/top.jpeg";
import styles from "../styles/top.module.scss";

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
          <Image src={topImage} alt="facePicture" />
        </div>
      </div>
    </div>
  );
};

export default Top;
