import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/header.module.scss";
import { useAppSelector, useAppDispatch } from "../hooks";
import { useRouter } from "next/router";
import { navToggle } from "../features/buttons";

const Header = () => {
  const router = useRouter();
  const pathName = router.pathname;
  const navIsOpen = useAppSelector((state) => state.buttons.navIsOpen);
  const dispatch = useAppDispatch();
  const [navBGC, setNavBGC] = useState("");

  const changePcNavBgc = () => {
    const yPosition = window.pageYOffset;
    const pageHeight = window.innerHeight;
    if (yPosition > pageHeight * 0.2 && yPosition < pageHeight * 0.9) {
      setNavBGC("lightblue");
    } else if (yPosition > pageHeight * 0.9 && yPosition < pageHeight * 2.17) {
      setNavBGC("navy");
    } else if (yPosition > pageHeight * 2.17 && yPosition < pageHeight * 4.47) {
      setNavBGC("lightblue");
    } else if (yPosition > pageHeight * 4.47) {
      setNavBGC("navy");
    }
  };

  const changeMobileNavBgc = () => {
    const yPosition = window.pageYOffset;
    const pageHeight = window.innerHeight;
    if (yPosition > pageHeight * 0.2 && yPosition < pageHeight * 1.13) {
      setNavBGC("lightblue");
    } else if (yPosition > pageHeight * 1.13 && yPosition < pageHeight * 2.78) {
      setNavBGC("navy");
    } else if (yPosition > pageHeight * 2.78 && yPosition < pageHeight * 7.55) {
      setNavBGC("lightblue");
    } else if (yPosition > pageHeight * 7.55) {
      setNavBGC("navy");
    }
  };

  useEffect(() => {
    if (pathName === "/") {
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
    }
  }, [pathName]);
  return (
    <>
      <header className={`${styles["menu-wrapper"]} ${styles[navBGC]}`}>
        <div
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
              <Link href="/">
                <a onClick={() => dispatch(navToggle())}>Azusa Nakahashi</a>
              </Link>
            </p>
            <div className={styles["menu-list"]}>
              <ul className={styles["page-section-list"]}>
                <li className={styles["item-1"]}>
                  <Link href="/#topPage">
                    <a onClick={() => dispatch(navToggle())}>Top</a>
                  </Link>
                </li>
                <li className={styles["item-2"]}>
                  <Link href="/#about">
                    <a onClick={() => dispatch(navToggle())}>About</a>
                  </Link>
                </li>
                <li className={styles["item-3"]}>
                  <Link href="/#projects">
                    <a onClick={() => dispatch(navToggle())}>Projects</a>
                  </Link>
                </li>
                <li className={styles["item-4"]}>
                  <Link href="/#contact">
                    <a onClick={() => dispatch(navToggle())}>Contact</a>
                  </Link>
                </li>
              </ul>
              <ul className={styles["social-media-list"]}>
                <li className={styles["item-5"]}>
                  <Link href="https://www.linkedin.com/in/azusa-nakahashi/">
                    <a>
                      <picture>
                        <img src="/icons/linkedin.svg" alt="link to linkedIn" />
                      </picture>
                    </a>
                  </Link>
                </li>
                <li className={styles["item-6"]}>
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
