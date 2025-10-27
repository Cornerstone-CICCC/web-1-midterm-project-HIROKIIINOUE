import React, { useEffect, useState } from 'react'
import styles from './MyJobProjectList.module.scss'
import Image from 'next/image'
import { useLanguage } from '../providers/LanguageProvider'
import { JobProjectScriptEn, JobProjectScriptFr, JobProjectScriptJp } from '../scriptdata/jobProjectScriptData'

type LanguageKey = "english" | "japanese" | "french";


const selectedScript = (selectedLanguage: string) => {
  if (selectedLanguage === "english") {
    return JobProjectScriptEn
  } else if (selectedLanguage === "japanese") {
    return JobProjectScriptJp
  } else {
    return JobProjectScriptFr
  }
}

const MyJobProjectList = () => {
  const [fadeIn, setFadeIn] = useState<boolean>(false)
  const { language } = useLanguage()

  const currentLanguage: LanguageKey =
    language === "english" || language === "japanese" || language === "french"
      ? language
      : "english";


  const scripts = selectedScript(currentLanguage)

  useEffect(() => {
    const id: ReturnType<typeof setTimeout> = setTimeout(() => setFadeIn(true), 10);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className={fadeIn ? `${styles.project_list}` : `${styles.project_list} ${styles.fade_in}`}>
      {scripts.map(script => (
        <div className={styles.project} key={script.id}>
          <h2 className={styles.h2}>{script.title}</h2>
          <div className={styles.img_wrapper}>
            <Image src={script.image} alt="" width={160} height={300} className={styles.img} priority />
          </div>
          <p className={styles.p}>{script.content}</p>
        </div>
      ))}
    </div>
  )
}

export default MyJobProjectList