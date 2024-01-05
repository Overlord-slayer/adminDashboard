import React from 'react'
import styles from '@/app/ui/dashboard/products/singleProduct/SingleProduct.module.css'
import Image from 'next/image'

export default function SingleProductPage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image
            src="/noproduct.jpg"
            alt=''
            fill
          />
        </div>
        Iphone
      </div>

      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Producto</label>
          <input type="text" name='title' placeholder='John Doe'/>
          
          <label>Precio</label>
          <input type="number" name='price' placeholder='$23'/>
          
          <label>Cantidad</label>
          <input type="number" name='stock' placeholder='23'/>
          
          <label>Tamaño</label>
          <textarea name="size" placeholder='Nueva York'></textarea>
          
          <label>Categoría</label>
          <select name="isAdmin" id="isAdmin">
            <option value="kitchen">Cocina</option>
            <option value="phone">Teléfono</option>
            <option value="computer">Computadora</option>
          </select>

          <label>Descripción</label>
          <textarea 
            name="desc"
            id="desc"
            rows={10}
            placeholder='Descripción'>
          </textarea>

          <button>
            Actualizar
          </button>
        </form>
      </div>
    </div>
  )
}
