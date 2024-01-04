import React from 'react'
import styles from './Transactions.module.css'
import Image from 'next/image'

export default function Transactions() {
  return (
    <div>
      <h2 className={styles.title}>Últimas transacciones</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Nombre</td>
            <td>Estatus</td>
            <td>Fecha</td>
            <td>Cantidad</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt='Usuario'
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>Pendiente</span>
            </td>
            <td>14.02.2024</td>
            <td>$3,200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt='Usuario'
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Finalizado</span>
            </td>
            <td>14.02.2024</td>
            <td>$3,200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt='Usuario'
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>Candelado</span>
            </td>
            <td>14.02.2024</td>
            <td>$3,200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt='Usuario'
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>Candelado</span>
            </td>
            <td>14.02.2024</td>
            <td>$3,200</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
