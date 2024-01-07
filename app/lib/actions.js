"use server"

import { revalidatePath } from "next/cache"
import { User, Product } from "./models"
import { connectToDB } from "./utils"
import { redirect } from "next/navigation"
import bcrypt from "bcrypt"
import { signIn } from "../api/auth/auth"

/**
 * 
 * @param {*} formData 
 */
export const addUser = async (formData) => {
  const {
    username,
    email,
    password,
    phone,
    address,
    isAdmin,
    isActive
  } = Object.fromEntries(formData)

  try {
    connectToDB()

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive
    })

    await newUser.save()
  } catch (error) {
    throw new Error("Falló en la creación del nuevo usuario")
  }

  revalidatePath("/dashboard/users")
  redirect("/dashboard/users")
}

/**
 * 
 * @param {*} formData 
 */
export const updateUser = async (formData) => {
  console.log("Valores del formulario ",formData)
  const {
    id,
    username,
    email,
    password,
    phone,
    address,
    isAdmin,
    isActive
  } = Object.fromEntries(formData)

  try {
    connectToDB()

    const updateFields = {
      username, email, password, phone, address, isAdmin, isActive
    }

    // Verificar que el campo sea actualizado para no subir nuevamente lo que ya estaba
    Object.keys(updateFields).forEach((key) => {
      if (updateFields[key] === "" || 
        updateFields[key] === undefined ||
        updateFields[key] === null ||
        key === '_id') {
        delete updateFields[key]

      }
    })
    
    console.log("Valores actualizados ",updateFields)
    
    await User.findByIdAndUpdate(id, updateFields)
  } catch (error) {
    throw new Error("Falló en la actualización del usuario")
  }

  revalidatePath("/dashboard/users")
  redirect("/dashboard/users")
}


/**
 * 
 * @param {*} formData 
 */
export const deleteUser = async (formData) => {

  const { id } = Object.fromEntries(formData)

  try {
    connectToDB()
    await User.findByIdAndDelete(id)
  } catch (error) {
    throw new Error("Falló en la eliminación del usuario")
  }

  revalidatePath("/dashboard/users")
}

/**
 * 
 * @param {*} formData 
 */
export const addProduct = async (formData) => {
  const {
    title,
    desc,
    price,
    stock,
    color,
    size,
  } = Object.fromEntries(formData)

  try {
    connectToDB()
    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      color,
      size,

    })

    await newProduct.save()
  } catch (error) {
    throw new Error("Falló en la creación del nuevo producto")
  }

  revalidatePath("/dashboard/products")
  redirect("/dashboard/products")
}

/**
 * 
 * @param {*} formData 
 */
export const updateProduct = async (formData) => {
  console.log("Valores del form ", formData)
  const {
    id,
    title,
    desc,
    price,
    stock,
    color,
    size,
  } = Object.fromEntries(formData)

  try {
    connectToDB()
    const updateFields = {
      title,
      desc,
      price,
      stock,
      color,
      size,
    }

    // Filtrar por los campos que realmente fueron actualizados
    Object.keys(updateFields).forEach((key) => {
      if (updateFields[key] === "" || 
        updateFields[key] === undefined || 
        updateFields[key] === null ||
        key === '_id') {
        delete updateFields[key]
      }
    })

    console.log("Informacion actualizada ",updateFields)
    // Actualizar los campos que fueron actualizados, segun el id
    await Product.findByIdAndUpdate(id, updateFields)
  } catch (error) {
    throw new Error(error.message)
  }

  revalidatePath("/dashboard/products")
  redirect("/dashboard/products")
}

/**
 * 
 * @param {*} formData 
 */
export const deleteProduct = async (formData) => {

  const { id } = Object.fromEntries(formData)

  try {
    connectToDB()
    await Product.findByIdAndDelete(id)
  } catch (error) {
    throw new Error("Falló en la eliminación del usuario")
  }

  revalidatePath("/dashboard/products")
}


export const authenticate = async (formData) => {
  const { username, password } = Object.fromEntries(formData)

  try {
    await signIn("credentials", { username, password })
  } catch (error) {
    throw error
  }

}