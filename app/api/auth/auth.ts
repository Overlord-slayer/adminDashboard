import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"

import { authConfig } from "@/app/auth.config"

import { connectToDB } from "@/app/lib/utils"
import { User } from "@/app/lib/models"


interface MySession extends Session {
  username?: string;
  img?: string;
  // Agrega otras propiedades según sea necesario
}

interface User {
  username: string;
  // Otras propiedades del usuario
}

const login = async (credentials:Partial<Record<string, unknown>>) => {

  try {
    connectToDB()
    const user = await User.findOne({ username: credentials.username })

    if (!user) throw new Error("Usuario invalido")

    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)

    if (!isPasswordCorrect) throw new Error("Contraseña invalida")

    return user

  } catch (err) {
    throw new Error((err as Error).message)
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {

        try {
         const user = await login(credentials)
          return user          
        } catch (err) {
          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = (user as any).username
        token.img = (user as any).img
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        const mySession = session as MySession
       // Verificar si token.username es de tipo string antes de asignarlo a mySession.username
        if (typeof token.username === 'string') {
          mySession.username = token.username;
        }

        // Verificar si token.img es de tipo string antes de asignarlo a mySession.img
        if (typeof token.img === 'string') {
          mySession.img = token.img;
        }
      }
      return session
    },
  }
})