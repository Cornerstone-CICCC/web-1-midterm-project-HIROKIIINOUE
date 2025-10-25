"use client"

import React, { useState } from 'react';
import styles from './Header.module.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import NightlightTwoToneIcon from '@mui/icons-material/NightlightTwoTone';
import Link from 'next/link';
import ListTwoToneIcon from '@mui/icons-material/ListTwoTone';

const Header: React.FC = () => {
  // const [isMeneLogo, setIsMenuLogo] = useState<boolean>(false)

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link href="https://google.com">
              <LinkedInIcon sx={{ fontSize: 40, color: "#adff2f" }} />
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="https://google.com">
              <EmailIcon sx={{ fontSize: 40, color: "#adff2f" }} />
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="https://google.com">
              <GitHubIcon sx={{ fontSize: 40, color: "#adff2f" }} />
            </Link>
          </li>
        </ul>
      </div>
      <menu className={styles.menu}>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li className={styles.li}>Home</li>
            <li className={styles.li}>My History</li>
            <li className={styles.li}>Project</li>
            <li className={styles.li}>Language</li>
          </ul>
        </nav>
        <div className={styles.menu_pulldown}>
          <ListTwoToneIcon sx={{ fontSize: 40 }} />
        </div>
        {/* <div className={styles.night_mode}>
          <NightlightTwoToneIcon sx={{ fontSize: 40 }} />
        </div> */}
      </menu>

    </header>
  );
};

export default Header;
