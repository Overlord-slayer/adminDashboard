import React from 'react'
import styles from '@/app/ui/dashboard/products/singleProduct/SingleProduct.module.css'
import Image from 'next/image'
import { fetchProduct } from '@/app/lib/data'
import { updateProduct } from '@/app/lib/actions'

type paramsProps = {
  id: string,
}

type Props = {
  params: paramsProps
}

export default async function SingleProductPage({ params }: Props) {
  const { id } = params
  const product = await fetchProduct(id)

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={product.img || "/noproduct.jpg"}
            alt=''
            fill
          />
        </div>
        {product.title}
      </div>

      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={product.id} />
          <label>Producto</label>
          <input type="text" name='title' placeholder={product.title}/>
          
          <label>Precio</label>
          <input type="number" name='price' placeholder={product.price}/>
          
          <label>Cantidad</label>
          <input type="number" name='stock' placeholder={product.stock}/>
          
          <label>Tamaño</label>
          <textarea name="size" placeholder={product.size}></textarea>
          
          {/* <label>Categoría</label>
          <select name="isAdmin" id="isAdmin">
            <option value="kitchen">Cocina</option>
            <option value="phone">Teléfono</option>
            <option value="computer">Computadora</option>
          </select> */}

          <label>Descripción</label>
          <textarea 
            name="desc"
            id="desc"
            rows={10}
            placeholder={product.desc}>
          </textarea>

          <button>
            Actualizar
          </button>
        </form>
      </div>
    </div>
  )
}
