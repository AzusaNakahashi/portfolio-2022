import { useAppSelector, useAppDispatch } from "../pages/app/hooks";
import { navToggle } from "../features/buttons";
import styles from "../styles/header.module.scss";
import Image from "next/image";
import hamburger from "../public/icons/hamburger.svg";
import Link from "next/link";
import gitIcon from "../public/icons/github.svg";
import linkedinIcon from "../public/icons/linkedin.svg";
import closeIcon from "../public/icons/close.svg";

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
            <div
              className={`${styles["close-button"]} ${
                !navIsOpen && styles["close"]
              }`}
              onClick={() => dispatch(navToggle())}
            >
              <Image src={closeIcon} alt="close icon" />
            </div>
          </div>
        </div>
        <div
          className={`${styles["menu-list"]} ${!navIsOpen && styles["close"]}`}
        >
          <ul className={styles["page-section-list"]}>
            <li>navIsOpen {navIsOpen ? "true" : "false"}</li>
            <li>
              <a href="#about" onClick={() => dispatch(navToggle())}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => dispatch(navToggle())}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => dispatch(navToggle())}>
                Contact
              </a>
            </li>
          </ul>
          <ul className={styles["social-media-list"]}>
            <li>
              <Link href="https://www.linkedin.com/in/azusa-nakahashi/">
                <a>
                  <Image src={linkedinIcon} alt="linkedIn icon" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/AzusaNakahashi">
                <a>
                  <Image src={gitIcon} alt="github icon" />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
