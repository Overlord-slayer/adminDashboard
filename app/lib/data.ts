import { Product, User } from "./models"
import { connectToDB } from "./utils"

export const fetchUsers = async (q: string, page: string) => {
  const regex = new RegExp(q,"i")

  const ITEM_PER_PAGE = 2
  try {
    
    connectToDB()
    const count = await User.countDocuments({ username: {$regex: regex }})
    const users = await User.find({ username: {$regex: regex }}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (parseInt(page) - 1))

    return {count, users}

  } catch (error) {
    throw new Error((error as Error).message) 
  }
}

export const fetchProducts = async (q: string, page: string) => {
  const regex = new RegExp(q,"i")

  const ITEM_PER_PAGE = 2
  try {
    
    connectToDB()
    const count = await Product.countDocuments({ title: {$regex: regex }})
    const products = await Product.find({ title: {$regex: regex }}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (parseInt(page) - 1))

    return {count, products}

  } catch (error) {
    throw new Error((error as Error).message) 
  }
}