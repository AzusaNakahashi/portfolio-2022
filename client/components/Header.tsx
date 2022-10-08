import { useAppSelector, useAppDispatch } from "../pages/app/hooks";
import { navToggle } from "../features/buttons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/header.module.scss";
import linkedinIcon from "../public/icons/linkedIn.svg";
import gitIcon from "../public/icons/github.svg";

const Header = () => {
  const navIsOpen = useAppSelector((state) => state.buttons.navIsOpen);
  const dispatch = useAppDispatch();
  return (
    <>
      <header className={styles["menu-wrapper"]}>
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
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
