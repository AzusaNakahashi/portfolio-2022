import text from "../public/text";
import Image from "next/image";
import topImage from "../public/pictures/top.jpeg";
import styles from "../styles/top.module.scss";
import { useAppSelector, useAppDispatch } from "../pages/app/hooks";

const Top = () => {
  const navIsOpen = useAppSelector((state) => state.buttons.navIsOpen);
  const dispatch = useAppDispatch();
  return (
    <div className={styles["topPage"]} id="topPage">
      <div className={styles["left"]}>
        <h1>Azusa Nakahashi</h1>
        <h2>Front-end developer</h2>
        {text.data.top.map((text, key) => (
          <p key={key}>{text}</p>
        ))}
      </div>
      <div className={styles["right"]}>
        <Image src={topImage} alt="facePicture" />
      </div>
    </div>
  );
};

export default Top;
