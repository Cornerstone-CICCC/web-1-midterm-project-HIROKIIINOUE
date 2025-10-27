'use client'

import React, { useState } from 'react'
import styles from './page.module.scss'
import MyJobProjectList from '../component/MyJobProjectList'
import MyOwnProjectList from '../component/MyOwnProjectList'

const MyProject = () => {
  const [page, setPage] = useState<"job" | "own">("own")

  return (
    <div className={styles.project}>
      <h1 className={styles.h1}>My Project</h1>
      <nav className={styles.nav}>
        <button type='button' className={page === "job" ? `${styles.button} ${styles.selected}` : `${styles.button}`} onClick={() => setPage("job")}>My Job Project</button>
        <button type='button' className={page === "own" ? `${styles.button} ${styles.selected}` : `${styles.button}`} onClick={() => setPage("own")}>My Own Project</button>
      </nav>
      {page === "job" ? (
        <MyJobProjectList />
      ) : (
        <MyOwnProjectList />
      )}
    </div>
  )
}

export default MyProject