"use client"

import React from 'react'
import styles from './Pagination.module.css'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

type Props = {
  count: number,
}

function Pagination({ count }: Props) {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()

  const page = searchParams.get("page") || "1"

  const params = new URLSearchParams(searchParams)
  const ITEM_PER_PAGE = 2

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count

  const handleChangePage = (type: string) => {
    type === "prev" ? params.set("page", (parseInt(page) - 1).toString())
    : params.set("page", (parseInt(page) + 1).toString())
    
    replace(`${pathname}?${params}`)

  }

  return (
    <div className={styles.container}>
      <button 
        className={styles.button} 
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}>
        Anterior
      </button>

      <button 
        className={styles.button} 
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}>
          Siguiente
        </button>
    </div>
  )
}

export default Pagination