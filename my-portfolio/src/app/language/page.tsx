'use client'

import React, { useEffect, useState } from 'react'
import styles from './page.module.scss'
import { useLanguage } from '../providers/LanguageProvider'

const LanguageOption = () => {
  const [fadeIn, setFadeIn] = useState<boolean>(false)
  const { setLanguage } = useLanguage()

  const changeLanguage = (selected: "english" | "japanese" | "french") => {
    setLanguage(selected)
  }

  useEffect(() => {
    const id: ReturnType<typeof setTimeout> = setTimeout(() => setFadeIn(true), 10);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className={styles.languageList}>
      <ul className={styles.ul}>
        <button type="button" className={fadeIn ? `${styles.li}` : `${styles.li} ${styles.fade_in}`} onClick={() => changeLanguage("english")}>English</button>
        <button type="button" className={fadeIn ? `${styles.li}` : `${styles.li} ${styles.fade_in}`} onClick={() => changeLanguage("japanese")}>Japanese</button>
        <button type="button" className={fadeIn ? `${styles.li}` : `${styles.li} ${styles.fade_in}`} onClick={() => changeLanguage("french")}>French</button>
      </ul>
    </div>
  )
}

export default LanguageOption