import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"

import { authConfig } from "@/app/auth.config"

import { connectToDB } from "@/app/lib/utils"
import { User } from "@/app/lib/models"

const login = async (credentials) => {

  try {
    connectToDB()
    const user = await User.findOne({ username: credentials.username })

    if (!user) throw new Error("Usuario invalido")

    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)

    if (!isPasswordCorrect) throw new Error("Contraseña invalida")

    return user

  } catch (err) {
    throw new Error(err.message)
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
     // Función jwt: Personaliza el token JWT con información adicional
    async jwt({ token, user }) {
      if (user) {
        // Agrega propiedades adicionales al token JWT
        token.username = user.username
        token.img = user.img
      }
      return token
    },
    // Función session: Personaliza el objeto de sesión con información adicional
    async session({ session, token }) {
      if (token) {
        // Actualiza el objeto de sesión con información del token
        session.user.username = token.username
        session.user.img = token.img
      }
      return session
    },
  }
})