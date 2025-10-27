import React from 'react'
import styles from './MyJobProjectList.module.scss'
import Image from 'next/image'
import { JobProjectScriptEn } from '../scriptdata/jobProjectScriptData'

const MyJobProjectList = () => {
  const scripts = JobProjectScriptEn;

  return (
    <div className={styles.project_list}>
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