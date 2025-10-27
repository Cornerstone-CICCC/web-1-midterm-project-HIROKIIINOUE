'use client'

import React, { useState } from 'react'
import styles from './page.module.scss'
import MyJobProjectList from '../component/MyJobProjectList'
import MyOwnProjectList from '../component/MyOwnProjectList'
import { useLanguage } from '../providers/LanguageProvider'
import { projectScript } from '../scriptdata/projectScriptData'

type LanguageKey = "english" | "japanese" | "french";

const MyProject = () => {
  const [page, setPage] = useState<"job" | "own">("own")
  const { language } = useLanguage();

  const currentLanguage: LanguageKey =
    language === "english" || language === "japanese" || language === "french"
      ? language
      : "english";

  const script = projectScript;

  return (
    <div className={styles.project}>
      <h1 className={styles.h1}>Projects</h1>
      <nav className={styles.nav}>
        <button type='button' className={page === "own" ? `${styles.button} ${styles.selected}` : `${styles.button}`} onClick={() => setPage("own")}>{script[currentLanguage][0]}</button>
        <button type='button' className={page === "job" ? `${styles.button} ${styles.selected}` : `${styles.button}`} onClick={() => setPage("job")}>{script[currentLanguage][1]}</button>
      </nav>
      {page === "own" ? (
        <MyOwnProjectList />
      ) : (
        <MyJobProjectList />
      )}
    </div>
  )
}

export default MyProject