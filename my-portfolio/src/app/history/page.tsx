'use client'
import React, { useState } from 'react'
import styles from './page.module.scss'
import { useLanguage } from '../providers/LanguageProvider'
import { historyScriptEn, historyScriptFr, historyScriptJp } from '../scriptdata/scriptData';

type LanguageKey = "english" | "japanese" | "french";

const selectedScript = (selectedLanguage: string) => {
  if (selectedLanguage === "english") {
    return historyScriptEn
  } else if (selectedLanguage === "japanese") {
    return historyScriptJp
  } else {
    return historyScriptFr
  }
}

const MyHistory = () => {
  const [fadeIn, setFadeIn] = useState<boolean>(false)
  const { language } = useLanguage()

  // decide initial data as english
  const currentLanguage: LanguageKey =
    language === "english" || language === "japanese" || language === "french"
      ? language
      : "english";


  const scripts = selectedScript(currentLanguage)
  setTimeout(() => setFadeIn(true), 10)

  return (
    <div className={styles.history}>
      <h1 className={styles.h1}>My History</h1>
      <ul className={styles.ul}>
        {scripts.map((script) => (
          <li className={fadeIn ? `${styles.li}` : `${styles.li} ${styles.fade_in}`} key={script.id}>
            <div>{script.date}</div>
            <h2 className={styles.h2}>
              {script.title}
            </h2>
            <p className={styles.p}>
              {script.content}
            </p>
          </li>

        ))}

      </ul>
    </div>
  )
}

export default MyHistory