import React from 'react'
import styles from './Search.module.css'
import { MdSearch } from 'react-icons/md'

type Props = {
  placeHolder: string,
}

function Search({placeHolder}: Props) {
  return (
    <div className={styles.container}>
      <MdSearch/>
      <input type="text" placeholder={placeHolder} className={styles.input} />
    </div>
  )
}

export default Search