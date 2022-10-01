import { useAppSelector, useAppDispatch } from "../pages/app/hooks";
import { navToggle } from "../features/buttons";
import styles from "../styles/header.module.scss";
import Image from "next/image";
import hamburger from "../public/icons/hamburger.svg";

const Header = () => {
  const navIsOpen = useAppSelector((state) => state.buttons.navIsOpen);
  const dispatch = useAppDispatch();
  return (
    <header className={`${styles["header"]} ${!navIsOpen && styles["close"]}`}>
      <nav>
        <div className={styles["logo-and-buttons"]}>
          <p className={styles["logo"]}>Logo</p>
          <div className={styles["toggle-buttons"]}>
            <div
              className={`${styles["hamburger"]} ${
                !navIsOpen && styles["close"]
              }`}
            >
              <Image
                src={hamburger}
                alt="hamburger icon"
                onClick={() => dispatch(navToggle())}
              />
            </div>
            <p
              className={`${styles["close-button"]} ${
                !navIsOpen && styles["close"]
              }`}
              onClick={() => dispatch(navToggle())}
            >
              close
            </p>
          </div>
        </div>
        <div
          className={`${styles["page-section-list"]} ${
            !navIsOpen && styles["close"]
          }`}
        >
          <ul>
            <li>navIsOpen {navIsOpen ? "true" : "false"}</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
          <ul>
            <li>linkedIn</li>
            <li>Git</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
