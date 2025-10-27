'use client'

import React, { useEffect, useState } from 'react'
import styles from './page.module.scss'
import { useLanguage } from '../providers/LanguageProvider'
import Link from 'next/link'

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
        <button type="button" className={fadeIn ? `${styles.li}` : `${styles.li} ${styles.fade_in}`} onClick={() => changeLanguage("english")}><Link href="/" className={styles.link}>English</Link></button>
        <button type="button" className={fadeIn ? `${styles.li}` : `${styles.li} ${styles.fade_in}`} onClick={() => changeLanguage("japanese")}><Link href="/" className={styles.link}>Japanese</Link></button>
        <button type="button" className={fadeIn ? `${styles.li}` : `${styles.li} ${styles.fade_in}`} onClick={() => changeLanguage("french")}><Link href="/" className={styles.link}>French</Link></button>
      </ul>
    </div>
  )
}

export default LanguageOption