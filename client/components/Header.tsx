import { useAppSelector, useAppDispatch } from "../pages/app/hooks";
import { navToggle } from "../features/buttons";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/header.module.scss";

const Header = () => {
  const navIsOpen = useAppSelector((state) => state.buttons.navIsOpen);
  const dispatch = useAppDispatch();
  const [navBGC, setNavBGC] = useState("");

  const changePcNavBgc = () => {
    const yPosition = window.pageYOffset;
    const pageHeight = window.innerHeight;
    if (yPosition > pageHeight * 0.2 && yPosition < pageHeight * 0.88) {
      setNavBGC("lightblue");
    } else if (yPosition > pageHeight * 0.88 && yPosition < pageHeight * 2.5) {
      setNavBGC("navy");
    } else if (yPosition > pageHeight * 2.5 && yPosition < pageHeight * 4.47) {
      setNavBGC("lightblue");
    } else if (yPosition > pageHeight * 4.47) {
      setNavBGC("navy");
    }
  };

  const changeMobileNavBgc = () => {
    const yPosition = window.pageYOffset;
    const pageHeight = window.innerHeight;
    if (yPosition > pageHeight * 0.2 && yPosition < pageHeight * 1.35) {
      setNavBGC("lightblue");
    } else if (yPosition > pageHeight * 1.35 && yPosition < pageHeight * 3.05) {
      setNavBGC("navy");
    } else if (yPosition > pageHeight * 3.05 && yPosition < pageHeight * 7.55) {
      setNavBGC("lightblue");
    } else if (yPosition > pageHeight * 7.55) {
      setNavBGC("navy");
    }
  };

  useEffect(() => {
    if (window.innerWidth > 900) {
      window.addEventListener("scroll", changePcNavBgc);
      return () => {
        window.removeEventListener("scroll", changePcNavBgc);
      };
    } else {
      window.addEventListener("scroll", changeMobileNavBgc);
      return () => {
        window.removeEventListener("scroll", changeMobileNavBgc);
      };
    }
  }, []);
  return (
    <>
      <header className={`${styles["menu-wrapper"]} ${styles[navBGC]}`}>
        <input
          className={styles["toggler"]}
          onClick={() => dispatch(navToggle())}
        />
        <div
          className={`${styles["hamburger"]} ${navIsOpen && styles["open"]}`}
        >
          <div></div>
        </div>
        <div className={`${styles["menu"]} ${navIsOpen && styles["open"]}`}>
          <div>
            <p className={styles["top-page-button"]}>
              <a href="/" onClick={() => dispatch(navToggle())}>
                Azusa Nakahashi
              </a>
            </p>
            <div className={styles["menu-list"]}>
              <ul className={styles["page-section-list"]}>
                <li>
                  <a href="#topPage" onClick={() => dispatch(navToggle())}>
                    Top
                  </a>
                </li>
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
                      <picture>
                        <img src="/icons/linkedIn.svg" alt="link to linkedIn" />
                      </picture>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/AzusaNakahashi">
                    <a>
                      <picture>
                        <img src="/icons/github.svg" alt="link to github" />
                      </picture>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
