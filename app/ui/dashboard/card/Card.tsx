import React from 'react'
import styles from './Card.module.css'
import { MdSupervisedUserCircle } from 'react-icons/md'

export default function Card() {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24}/>
      <div className={styles.text}>
        <span className={styles.title}>Usuarios Totales</span>
        <span className={styles.number}>10.273</span>
        <span className={styles.detail}>
          <span className={styles.positive}>12%</span> más que la semana pasada
          </span>
      </div>
    </div>
  )
}

