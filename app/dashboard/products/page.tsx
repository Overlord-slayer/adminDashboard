/**
 * Apartado para los productos, en este caso, se listan los productos existentes
 * 
 */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import styles from '@/app/ui/dashboard/products/Products.module.css'
import Search from '@/app/ui/dashboard/search/Search'
import Pagination from '@/app/ui/dashboard/pagination/Pagination'

import { fetchProducts } from '@/app/lib/data'

type searchParamsProps = {
  q?: string,
  page?: string
}
type Props = {
  searchParams: searchParamsProps,
}

const ProductsPage = async ({ searchParams }: Props) => {
  const q = searchParams?.q || ""
  const page = searchParams?.page || "1"
  const {count, products } = await fetchProducts(q, page)

  console.log(products)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeHolder='Buscar un producto'/>
        <Link href="/dashboard/products/add">
          {/* Redirige a la ventana /add */}
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
          {products.map((product) => (
            <tr key={product.id}>
            <td>
              <div className={styles.product}>
                <Image
                  src={product.img || "/noproduct.jpg"}
                  alt=''
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                {product.title}
              </div>
            </td>
            <td>{product.desc}</td>
            <td>{product.price}</td>
            <td>{product.createdAt?.toString().slice(4,16)}</td>
            <td>{product.stock}</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/products/${product.id}">
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
        ))}
        </tbody>
      </table>
      <Pagination count={count}/>
    </div>
  )
}

export default ProductsPage