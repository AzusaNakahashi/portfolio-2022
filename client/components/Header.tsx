import { useAppSelector, useAppDispatch } from "../pages/app/hooks";
import { navToggle } from "../features/buttons";
import styles from "../styles/header.module.scss";

const Header = () => {
  const navIsOpen = useAppSelector((state) => state.buttons.navIsOpen);
  const dispatch = useAppDispatch();
  return (
    <header
      className={`${styles["header"]} ${
        navIsOpen ? styles["open"] : styles["close"]
      }`}
    >
      <div className={styles["nav-close-button"]}>
        <p className={styles["logo"]}>Logo</p>
        <p
          className={navIsOpen ? styles["open"] : styles["close"]}
          onClick={() => dispatch(navToggle())}
        >
          close
        </p>
      </div>
      <nav className={navIsOpen ? styles["open"] : styles["close"]}>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li>linkedIn</li>
          <li>Git</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
