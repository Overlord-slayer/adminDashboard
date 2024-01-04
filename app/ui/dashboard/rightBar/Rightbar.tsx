import React from 'react'
import styles from './RightBar.module.css'
import Image from 'next/image'
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md'

export default function Rightbar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image
            className={styles.bg}
            src="/astronaut.png"
            alt=""
            fill
          />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>Disponible Ahora</span>
          <h3 className={styles.title}>¿Cómo utilizar la nueva versión del panel de administración?</h3>
          <span className={styles.subtitle}>Tomará 4 minutos en aprender</span>
          <p className={styles.description}>
            Text informativo, en este caso, se pone lorem ipsum, pero no me guta
            asi que pongo este texto alternativo para rellenar
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled/>
            Ver
          </button>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.text}>
          <span className={styles.notification}>Próximamente</span>
          <h3 className={styles.title}>Nuevos server actions estan disponibles, el pre-renderizado parcial esta cerca</h3>
          <span className={styles.subtitle}>Acelerá tu productividad</span>
          <p className={styles.description}>
            Text informativo, en este caso, se pone lorem ipsum, pero no me guta
            asi que pongo este texto alternativo para rellenar
          </p>
          <button className={styles.button}>
            <MdReadMore/>
            Aprender
          </button>
        </div>
      </div>
    </div>
  )
}
