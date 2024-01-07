import React from 'react'

import styles from '@/app/ui/login/LogIn.module.css'

import LoginForm from '../ui/login/loginForm/loginForm'

function LogInPage() {
  return (
    <div className={styles.container}>
      <LoginForm/>
      
    </div>
  )
}

export default LogInPage