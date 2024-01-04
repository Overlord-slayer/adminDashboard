"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch
} from 'react-icons/md'
import styles from './Navbar.module.css'


function Navbar() {
  const pathName = usePathname()

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {pathName.split("/").pop()}
      </div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch/>
          <input type="text" placeholder='Buscar...' className={styles.input} />
        </div>
        <div className={styles.icons}>
          <MdOutlineChat size={20}/>
          <MdNotifications size={20}/>
          <MdPublic size={20}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar