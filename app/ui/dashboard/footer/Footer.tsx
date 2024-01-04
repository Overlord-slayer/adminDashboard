import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Samuel Argueta</div>
      <div className={styles.text}>&copy; Todos los derechos reservados</div>
    </div>
  )
}
