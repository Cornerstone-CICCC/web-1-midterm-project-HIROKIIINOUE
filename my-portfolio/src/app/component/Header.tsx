"use client"

import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link';
import ListTwoToneIcon from '@mui/icons-material/ListTwoTone';
import { usePathname } from 'next/navigation';
import MenuBar from './MenuBar';
import { useLanguage } from '../providers/LanguageProvider';
import { headerScript } from '../scriptdata/scriptData';

type LanguageKey = "english" | "japanese" | "french";

const Header = () => {
  const currentPath = usePathname()
  const [currentPage, setCurrentPage] = useState<string>("")
  const [isMenuBar, setIsMenuBar] = useState<boolean>(false)
  const { language } = useLanguage()

  // decide initial data as english
  const currentLanguage: LanguageKey =
    language === "english" || language === "japanese" || language === "french"
      ? language
      : "english";

  const script = headerScript;


  useEffect(() => {
    setCurrentPage(currentPath)
  }, [currentPath])

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link href="https://www.linkedin.com/in/hiroki-inoue-04a805377/" target="_blank">
                <LinkedInIcon sx={{ fontSize: 40, color: "#adff2f" }} />
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="https://google.com">
                <EmailIcon sx={{ fontSize: 40, color: "#adff2f" }} />
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="https://github.com/HIROKIIINOUE" target="_blank">
                <GitHubIcon sx={{ fontSize: 40, color: "#adff2f" }} target="_blank" />
              </Link>
            </li>
          </ul>
        </div>
        <menu className={styles.menu}>
          <nav className={styles.nav}>
            <ul className={styles.ul}>
              <li className={styles.li}><Link className={currentPage === "/" ? `${styles.link} ${styles.selected}` : `${styles.link}`} href="/">{script[currentLanguage][0]}</Link></li>
              <li className={styles.li}><Link className={currentPage === "/history" ? `${styles.link} ${styles.selected}` : `${styles.link}`} href="/history">{script[currentLanguage][1]}</Link></li>
              <li className={styles.li}><Link className={currentPage === "/project" ? `${styles.link} ${styles.selected}` : `${styles.link}`} href="/project">{script[currentLanguage][2]}</Link></li>
              <li className={styles.li}><Link className={currentPage === "/language" ? `${styles.link} ${styles.selected}` : `${styles.link}`} href="/language">{script[currentLanguage][3]}</Link></li>
            </ul>
          </nav>
          <button type='button' className={styles.menu_button} onClick={() => setIsMenuBar(true)}>
            <ListTwoToneIcon sx={{ fontSize: 40 }} />
          </button>
        </menu>
      </header>
      <MenuBar isMenuBar={isMenuBar} setIsMenuBar={setIsMenuBar} />
    </>
  );
};

export default Header;
