import Search from '@/app/ui/dashboard/search/Search'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '@/app/ui/dashboard/products/Products.module.css'
import Pagination from '@/app/ui/dashboard/pagination/Pagination'

export default function ProductsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeHolder='Buscar un producto'/>
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Agregar</button>
        </Link>
        
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Título</td>
            <td>Descripción</td>
            <td>Precio</td>
            <td>Creado en</td>
            <td>Existencias</td>
            <td>Acción</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/noproduct.jpg"
                  alt=''
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                Iphone
              </div>
            </td>
            <td>Detalles extra</td>
            <td>$999</td>
            <td>13.02.2024</td>
            <td>72</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={`${styles.button} ${styles.view}`}>
                    Ver
                  </button>
                </Link>
                  <button className={`${styles.button} ${styles.delete}`}>
                    Eliminar
                  </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination/>
    </div>
  )
}
