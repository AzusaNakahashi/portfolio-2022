import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/layout/header.module.scss";
import { useAppSelector, useAppDispatch } from "../hooks";
import { useRouter } from "next/router";
import { navToggle } from "../features/buttons";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const router = useRouter();
  const pathName = router.pathname;
  const dispatch = useAppDispatch();
  const [navBGC, setNavBGC] = useState("");
  const navIsOpen = useAppSelector((state) => state.buttons.navIsOpen);
  const heroIsVisible = useAppSelector(
    (state) => state.elementVisibility.hero.componentIsVisible
  );
  const aboutIsVisible = useAppSelector(
    (state) => state.elementVisibility.about.componentIsVisible
  );
  const projectsIsVisible = useAppSelector(
    (state) => state.elementVisibility.projects.componentIsVisible
  );
  const contactIsVisible = useAppSelector(
    (state) => state.elementVisibility.contact.componentIsVisible
  );

  // chenge nav background color depending on the section
  useEffect(() => {
    if (pathName === "/") {
      if (heroIsVisible) {
        setNavBGC("transparent");
      } else if (!heroIsVisible && aboutIsVisible) {
        setNavBGC("navy");
      } else if (!aboutIsVisible && projectsIsVisible) {
        setNavBGC("lightblue");
      } else if (!projectsIsVisible && contactIsVisible) {
        setNavBGC("navy");
      }
    } else {
      setNavBGC("lightblue");
    }
  }, [
    pathName,
    aboutIsVisible,
    heroIsVisible,
    projectsIsVisible,
    contactIsVisible,
  ]);

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
            <div className={styles["menu-list"]}>
              <ul className={styles["page-section-list"]}>
                {/* item number for animation */}
                <li className={styles["item-1"]}>
                  <Link href="/#topPage" scroll={false}>
                    <ScrollLink
                      to="topPage"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      onClick={() => dispatch(navToggle())}
                    >
                      Top
                    </ScrollLink>
                  </Link>
                </li>
                <li className={styles["item-2"]}>
                  <Link href="/#about" scroll={false}>
                    <ScrollLink
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      onClick={() => dispatch(navToggle())}
                    >
                      About
                    </ScrollLink>
                  </Link>
                </li>
                <li className={styles["item-3"]}>
                  <Link href="/#projects">
                    <ScrollLink
                      to="projects"
                      spy={true}
                      smooth={true}
                      offset={80}
                      duration={500}
                      onClick={() => dispatch(navToggle())}
                    >
                      Projects
                    </ScrollLink>
                  </Link>
                </li>
                <li className={styles["item-4"]}>
                  <Link href="/#contact">
                    <ScrollLink
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={100}
                      duration={500}
                      onClick={() => dispatch(navToggle())}
                    >
                      Contact
                    </ScrollLink>
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
