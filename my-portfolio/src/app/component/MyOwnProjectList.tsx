import Image from 'next/image'
import styles from './MyOwnProjectList.module.scss'
import React, { useEffect, useState } from 'react'
import { ownProjectScriptEn } from '../scriptdata/ownProjectScriptData';
import { useLanguage } from '../providers/LanguageProvider';


const MyOwnProjectList = () => {
  const [fadeIn, setFadeIn] = useState<boolean>(false)
  const { setLanguage } = useLanguage()

  const changeLanguage = (selected: "english" | "japanese" | "french") => {
    setLanguage(selected)
  }
  const scripts = ownProjectScriptEn;

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
            <Image src={script.image} alt="" width={250} height={350} className={styles.img} priority />
          </div>
          <p className={styles.p}>{script.content}</p>
        </div>
      ))}
    </div>
  )
}

export default MyOwnProjectList