"use client"

import { createContext, useContext } from "react"
import { UserContextType } from "@/app/types/userContext.type"

export const UserContext = createContext<UserContextType | undefined>(undefined)

export function useUser() {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error("useUser deve ser usado dentro de um UserProvider.")
  }
  return context
}