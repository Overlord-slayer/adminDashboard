import React from 'react'
import Image from 'next/image'

import styles from '@/app/ui/dashboard/users/singleUser/SingleUser.module.css'

import { fetchUser } from '@/app/lib/data'
import { updateUser } from '@/app/lib/actions'

type paramsProps = {
  id: string,
}
type Props = {
  params: paramsProps
}
export default async function SingleUserPage({params}: Props) {
  const { id } = params
  const user = await fetchUser(id)
  
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={user.img || "/noavatar.png"}
            alt=''
            fill
          />
        </div>
        {user.username}
      </div>

      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name='id' value={user.id}/>
          <label>Nombre de usuario</label>
          <input type="text" name='username' placeholder={user.username}/>
          
          <label>Correo</label>
          <input type="email" name='email' placeholder={user.email}/>
          
          <label>Contraseña</label>
          <input type="password" name='phone'/>
        
          <label>Teléfono</label>
          <input type="text" name='phone' placeholder={user.phone}/>
          
          <label>Dirección</label>
          <textarea name="address" placeholder={user.address}>
          </textarea>
          
          <label>¿Administrador?</label>
          <select name="isAdmin" id="isAdmin">
            <option value="true" selected={user.isAdmin ? false: true}>Sí</option>
            <option value="false" selected={!user.isAdmin ? true: false}>No</option>
          </select>

          <label>¿Activo?</label>
          <select name="isActive" id="isActive">
            <option value="true" selected={user.isActive ? false: true}>Sí</option>
            <option value="false" selected={!user.isActive ? true: false}>No</option>
          </select>

          <button>
            Actualizar
          </button>
        </form>
      </div>
    </div>
  )
}
