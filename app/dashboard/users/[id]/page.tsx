import React from 'react'
import styles from '@/app/ui/dashboard/users/singleUser/SingleUser.module.css'
import Image from 'next/image'

export default function SingleUserPage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image
            src="/noavatar.png"
            alt=''
            fill
          />
        </div>
        John Doe
      </div>

      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Nombre de usuario</label>
          <input type="text" name='username' placeholder='John Doe'/>
          
          <label>Correo</label>
          <input type="email" name='email' placeholder='JohnDoe@gmail.com'/>
          
          <label>Contraseña</label>
          <input type="password" name='phone'/>
        
          <label>Teléfono</label>
          <input type="text" name='phone' placeholder='+1234567'/>
          
          <label>Dirección</label>
          <textarea name="address" placeholder='Nueva York'></textarea>
          
          <label>¿Administrador?</label>
          <select name="isAdmin" id="isAdmin">
            <option value="true">Sí</option>
            <option value="false">No</option>
          </select>

          <label>¿Activo?</label>
          <select name="isActive" id="isActive">
            <option value="true">Sí</option>
            <option value="false">No</option>
          </select>

          <button>
            Actualizar
          </button>
        </form>
      </div>
    </div>
  )
}
