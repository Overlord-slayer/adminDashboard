import mongoose from "mongoose";

interface ConnectionObject {
  isConnected?: number
}

export const connectToDB = async () => {
  const connection: ConnectionObject = {}
  try {
    if (connection.isConnected) return

    const db = await mongoose.connect(process.env.MONGO as string)
    connection.isConnected = db.connections[0].readyState
  } catch (error) {
    throw new Error((error as Error).message)
  }
};
