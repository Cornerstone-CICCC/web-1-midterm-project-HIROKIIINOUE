import Image from 'next/image'
import styles from './MyOwnProjectList.module.scss'
import React from 'react'
import { ownProjectScriptEn } from '../scriptdata/ownProjectScriptData';


const MyOwnProjectList = () => {
  const scripts = ownProjectScriptEn;

  return (
    <div className={styles.project_list}>
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