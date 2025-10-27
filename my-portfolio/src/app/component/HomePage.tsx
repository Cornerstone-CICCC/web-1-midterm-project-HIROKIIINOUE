'use client'

import React, { useEffect, useState } from 'react'
import styles from './HomePage.module.scss'
import Image from 'next/image'
import { useLanguage } from '../providers/LanguageProvider'
import { homePageScript } from '../scriptdata/homePageScriptData'

type LanguageKey = "english" | "japanese" | "french";


const HomePage = () => {
  const [fadeIn, setFadeIn] = useState<boolean>(false)
  const { language } = useLanguage()

  // decide initial data as english
  const currentLanguage: LanguageKey =
    language === "english" || language === "japanese" || language === "french"
      ? language
      : "english";

  const scripts = homePageScript;

  useEffect(() => {
    const id: ReturnType<typeof setTimeout> = setTimeout(() => setFadeIn(true), 10);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.profileImage}>
        <div className={styles.imageWrapper}>
          <Image src="/profile.jpg" alt="" width={300} height={400} className={styles.img} priority />
        </div>

      </div>
      <div className={fadeIn ? `${styles.introduction}` : `${styles.introduction} ${styles.fade_in}`} >
        <h1 className={styles.h1}>{scripts[currentLanguage][0]}<br /><span className={styles.myName}>{scripts[currentLanguage][1]}</span></h1>
        <p className={styles.profile} style={{ whiteSpace: 'pre-line' }}> {scripts[currentLanguage][2]}</p>
        <div className={styles.skills}>
          <h2 className={styles.skillsTitle}>{scripts[currentLanguage][3]}</h2>
          <ul className={styles.skillList}>
            <li className={styles.list}>Html,CSS,SASS: ★★★★☆</li>
            <li className={styles.list}>TailwindCSS: ★★★★☆</li>
            <li className={styles.list}>JavaScript: ★★★★☆</li>
            <li className={styles.list}>TypeScript: ★★★★☆</li>
            <li className={styles.list}>Node.js: ★★★☆☆</li>
            <li className={styles.list}>React.js: ★★★★☆</li>
            <li className={styles.list}>Next.js: ★★☆☆☆</li>
            <li className={styles.list}>Primsa: ★★☆☆☆</li>
            <li className={styles.list}>Supabase: ★★★☆☆</li>
            <li className={styles.list}>Firebase: ★★★☆☆</li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default HomePage