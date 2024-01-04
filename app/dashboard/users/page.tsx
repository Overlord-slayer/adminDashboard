import React from 'react'
import styles from '@/app/ui/dashboard/users/Users.module.css'
import Search from '@/app/ui/dashboard/search/Search'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '@/app/ui/dashboard/pagination/Pagination'

function UsersPage() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeHolder='Buscar un usuario'/>
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Agregar</button>
        </Link>
        
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Nombre</td>
            <td>Correo</td>
            <td>Creado el</td>
            <td>Rol</td>
            <td>Estado</td>
            <td>Acción</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=''
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>john@gmail.com</td>
            <td>13.02.2024</td>
            <td>Admin</td>
            <td>Activo</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={`${styles.button} ${styles.view}`}>
                    Ver
                  </button>
                </Link>
                  <button className={`${styles.button} ${styles.delete}`}>
                    Eliminar
                  </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination/>
    </div>
  )
}

export default UsersPage