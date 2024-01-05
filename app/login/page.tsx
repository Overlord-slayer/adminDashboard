import React from 'react'
import styles from '@/app/ui/login/LogIn.module.css'

function LogInPage() {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <h1>Login</h1>
        <input type="text" placeholder='Usuario' />
        <input type="text" placeholder='Contraseña' />
        <button>LogIn</button>
      </form>
    </div>
  )
}

export default LogInPage