import React from 'react'
import styles from './Footer.module.scss';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.ul}>
        <li className={styles.li}><CopyrightIcon fontSize='small' />copy right</li>
        <li className={styles.li}><EmailIcon fontSize='small' /><a className={styles.a} href="mailto:tyynh.hiroki@gmail.com?subject=Contact from your website"
        >email: tyynh.hiroki@gmail.com</a></li>
        <li className={styles.li}><PhoneIcon fontSize='small' /><a className={styles.a} href="tel:6729711697"> +1 672 971 1697</a></li>
      </ul>
    </footer>
  )
}

export default Footer