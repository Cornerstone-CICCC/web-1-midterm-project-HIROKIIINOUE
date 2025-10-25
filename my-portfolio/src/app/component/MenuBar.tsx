import React from 'react'
import styles from './MenuBar.module.scss';
import Link from 'next/link';

type Props = {
  isMenuBar: boolean;
  setIsMenuBar: React.Dispatch<React.SetStateAction<boolean>>
}

const MenuBar = (props: Props) => {
  const { isMenuBar, setIsMenuBar } = props;

  return (
    <>
      <div className={isMenuBar ? `${styles.menu_bar} ${styles.showUp}` : `${styles.menu_bar}`}>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li className={styles.li}><Link className={styles.link} href="/" onClick={() => setIsMenuBar(false)}>Home</Link></li>
            <li className={styles.li}><Link className={styles.link} href="/history" onClick={() => setIsMenuBar(false)}>My History</Link></li>
            <li className={styles.li}><Link className={styles.link} href="/project" onClick={() => setIsMenuBar(false)}>Project</Link></li>
            <li className={styles.li}><Link className={styles.link} href="/language" onClick={() => setIsMenuBar(false)}>Language</Link></li>
          </ul>
        </nav>
      </div>
      {isMenuBar && <button type='button' className={styles.backGround} onClick={() => setIsMenuBar(false)}></button>}
    </>
  )
}

export default MenuBar