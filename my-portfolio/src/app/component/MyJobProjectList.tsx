import React, { useEffect, useState } from 'react'
import styles from './MyJobProjectList.module.scss'
import Image from 'next/image'
import { useLanguage } from '../providers/LanguageProvider'
import { JobProjectScriptEn } from '../scriptdata/jobProjectScriptData'

const MyJobProjectList = () => {
  const [fadeIn, setFadeIn] = useState<boolean>(false)
  const { setLanguage } = useLanguage()

  const changeLanguage = (selected: "english" | "japanese" | "french") => {
    setLanguage(selected)
  }
  const scripts = JobProjectScriptEn;

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