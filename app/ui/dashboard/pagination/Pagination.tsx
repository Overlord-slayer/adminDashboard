import React from 'react'
import styles from './Pagination.module.css'

function Pagination() {
  return (
    <div className={styles.container}>
      <button className={styles.button} disabled>Anterior</button>
      <button className={styles.button}>Siguiente</button>
    </div>
  )
}

export default Pagination