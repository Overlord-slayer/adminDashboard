import React from 'react'
import styles from '@/app/ui/dashboard/users/adduser/AddUser.module.css'

export default function AddUserPage() {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder='Nombre del usuario' name='username' required/>
        <input type="email" placeholder='Correo' name='email' required/>
        <input type="password" placeholder='Contraseña' name='password' required/>
        <input type="phone" placeholder='Teléfono' name='phone'/>
        
        <select name="isAdmin" id="isAdmin">
          <option value="false" selected>¿Administrador?</option>
          <option value="true">Sí</option>
          <option value="false">No</option>
        </select>

        <select name="isActive" id="isActive">
          <option value="true" selected>¿Activo?</option>
          <option value="true">Sí</option>
          <option value="false">No</option>
        </select>
        
        <textarea 
          name="address"
          id="address"
          rows={7} 
          placeholder='Dirección'>

        </textarea>
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}
