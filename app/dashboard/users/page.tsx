import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from '@/app/ui/dashboard/users/Users.module.css'
import Search from '@/app/ui/dashboard/search/Search'
import Pagination from '@/app/ui/dashboard/pagination/Pagination'

import { fetchUsers } from '@/app/lib/data'
import { deleteUser } from '@/app/lib/actions'

type searchParamsProps = {
  q?: string,
  page?: string
}
type Props = {
  searchParams: searchParamsProps,
}

const UsersPage = async ({ searchParams }: Props) => {
  const q = searchParams?.q || ""
  const page = searchParams?.page || "1"
  const {count, users} = await fetchUsers(q, page)

  

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
          {users.map((user) => (
            <tr key={user.id}>
            <td>
              <div className={styles.user}>
                <Image
                  src={user.img || "/noavatar.png"}
                  alt=''
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                {user.username}
              </div>
            </td>
            <td>{user.email}</td>
            <td>{user.createdAt?.toString().slice(4,16)}</td>
            <td>{user.isAdmin ? "Admin": "Cliente"}</td>
            <td>{user.isActive ? "Activo" : "Pasivo"}</td>
            <td>
              <div className={styles.buttons}>
                <Link href={`/dashboard/users/${user.id}`}>
                  <button className={`${styles.button} ${styles.view}`}>
                    Ver
                  </button>
                </Link>
                <form action={deleteUser}>
                  <input type="hidden" name="id" value={user.id} />
                  <button className={`${styles.button} ${styles.delete}`}>
                    Eliminar
                  </button>
                </form>
              </div>
            </td>
          </tr>
            ))}
        </tbody>
      </table>
      <Pagination count={count}/>
    </div>
  )
}

export default UsersPage