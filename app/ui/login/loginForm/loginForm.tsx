"use client"

import React, { useState } from 'react'
import styles from '@/app/ui/login/loginForm/LoginForm..module.css'

import { authenticate } from '@/app/lib/actions'

function LoginForm() {
  const [error, setError] = useState()

  const handleLogin = async (formData: FormData) => {
    try {
      const data = await authenticate(formData);
  
      if (data && data.error) {
        // @ts-ignore
        setError(data.error);
      }
    } catch (error) {
      console.error("Error durante el manejo del inicio de sesión:", error);
    }
  }
  return (
      <form action={handleLogin} className={styles.form}>
        <h1>Login</h1>
        <input type="text" placeholder='Usuario' name='username' />
        <input type="password" placeholder='Contraseña' name='password'/>
        <button>LogIn</button>
        {error && error}
      </form>
  )
}

export default LoginForm