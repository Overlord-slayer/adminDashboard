import React from 'react'
import styles from '@/app/ui/dashboard/products/addProduct/AddProduct.module.css'
import { addProduct } from '@/app/lib/actions'

export default function AddProductPage() {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input type="text" placeholder='Nombre del producto' name='title' required/>
        
        <select name="cat" id="cat">
          <option value="general">Seleccionar Categoría</option>
          <option value="kitchen">Cocina</option>
          <option value="phone">Teléfono</option>
          <option value="computer">Computadora</option>
        </select>
        
        <input type="number" placeholder='Precio' name='price' required/>
        <input type="number" placeholder='Cantidad' name='stock' required/>
        <input type="text" placeholder='Color' name='color'/>
        <input type="text" placeholder='Tamaño' name='size'/>
        <textarea 
          name="desc" 
          id="desc" 
          rows={7} 
          placeholder='Descripción'
          required
          >

        </textarea>
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}
