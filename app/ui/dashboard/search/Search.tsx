"use client"

import React, { ChangeEvent } from 'react'
import styles from './Search.module.css'
import { MdSearch } from 'react-icons/md'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

type Props = {
  placeHolder: string,
}

function Search({placeHolder}: Props) {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()  
  
  // Use debouncedCallback, ayuda a prevenir la busqueda innecesaria de info en la db
  const handleSearch = useDebouncedCallback((e:  ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams)

    params.set("page", "1")

    if (e.target.value) {
      // Evitar busquedas innecesarias, debe poseer al menos, 2 caracteres
      e.target.value.length > 2 && params.set("q", e.target.value)
    } else {
      params.delete("q")
    }
    
    replace(`${pathname}?${params}`)
  }, 300) // 300 ms de espera, hasta que este el valor a buscar

  return (
    <div className={styles.container}>
      <MdSearch/>
      <input 
        type="text"
        placeholder={placeHolder}
        className={styles.input}
        onChange={handleSearch}/>
    </div>
  )
}

export default Search

