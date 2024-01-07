import React from 'react'

import styles from '@/app/ui/login/LogIn.module.css'

import { authenticate } from '../lib/actions'

function LogInPage() {
  return (
    <div className={styles.container}>
      <form action={authenticate} className={styles.form}>
        <h1>Login</h1>
        <input type="text" placeholder='Usuario' name='username' />
        <input type="password" placeholder='Contraseña' name='password'/>
        <button>LogIn</button>
      </form>
    </div>
  )
}

export default LogInPage