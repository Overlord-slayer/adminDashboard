import React from 'react'
import styles from './SideBar.module.css'
import { menuItems } from '@/constants/sidebar'
import MenuLink from './menuLink/MenuLink'
import Image from 'next/image'
import { MdLogout } from 'react-icons/md'
import { auth, signOut } from '@/app/api/auth/auth.js'


const Sidebar = async () => {
  const session = await auth()
  console.log(session)
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image className={styles.userImage} src="/noavatar.png" alt='perfil' width={50} height={50}/>
        <div className={styles.userDetail}>
          <span className={styles.username}>John Doe</span>
          <span className={styles.userTitle}>Administrador</span>
        </div>
      </div>
      <ul className={styles.list}>
      {menuItems.map((cat) => (
        <li key={cat.title}>
          <span className={styles.cat}>{cat.title}</span>
          {cat.list.map((item) => (
            <MenuLink item={item} key={item.title}/>
          ))}
        </li>
      ))}
      </ul>
      <form action={async () => {
        "use server"
        await signOut()
      }}>
        <button className={styles.logout}>
          <MdLogout/>
          Cerrar Sesión
        </button>
      </form>
      
    </div>
  )
}

export default Sidebar