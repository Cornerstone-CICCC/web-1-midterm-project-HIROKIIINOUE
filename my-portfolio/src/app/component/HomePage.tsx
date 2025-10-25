import React from 'react'
import styles from './HomePage.module.scss'
import Image from 'next/image'


const HomePage = () => {
  return (
    <div className={styles.main}>

      <div className={styles.profileImage}>
        <div className={styles.imageWrapper}>
          <Image src="/profile.jpg" alt="" width={300} height={400} className={styles.img} priority />
        </div>

      </div>
      <div className={styles.introduction} >
        <h1 className={styles.h1}>Welcome to my page<br /><span className={styles.myName}>I am Hiroki</span></h1>
        <p className={styles.profile}>I&apos;m a student from Corner Stone College.<br />I&apos;d love to be committed to your project!<br />I&apos;m keen on learning something new.<br /> I speak Japanese(native), English(advanced), French(intermediate)</p>
        <div className={styles.skills}>
          <h2 className={styles.skillsTitle}>Skills</h2>
          <ul className={styles.skillList}>
            <li className={styles.list}>Html,CSS: ★★★★☆</li>
            <li className={styles.list}>JavaScript: ★★★★☆</li>
            <li className={styles.list}>TypeScript: ★★★★☆</li>
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