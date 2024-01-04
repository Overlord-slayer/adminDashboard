"use client"

import Link from 'next/link'
import React from 'react'
import styles from './MenuLink.module.css'
import { usePathname } from 'next/navigation'

// Define the types
type MenuItem = {
  title: string,
  path: string,
  icon: React.ReactElement, // This is the type for a React element
}

type MenuCategory = {
  title: string,
  list: MenuItem[],
}
export type MenuItems = MenuCategory[]

type Props = {
  item: MenuItem,
}

function MenuLink({ item }: Props) {
  const pathName = usePathname()

  return (
    <Link href={item.path} className={`${styles.container} ${pathName === item.path && styles.active}`}>
      {item.icon}
      {item.title}
    </Link>
    
  )
}

export default MenuLink