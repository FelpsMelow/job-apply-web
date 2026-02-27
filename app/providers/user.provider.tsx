"use client";

import { ReactNode, useEffect, useState } from "react";
import { UserContext } from "@/app/contexts/user.context";
import { UserContextType } from "@/app/types/userContext.type";

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUserState] = useState<
    Omit<UserContextType, "setUser" | "logout">
  >({
    userId: "",
    nome: "",
    email: "",
    fotoPerfil: "",
    tipoDeAcesso: "",
    obras: [],
    isLoading: false,
    isAuthenticated: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setUserState({ ...parsed, isAuthenticated: true });
      } catch {}
    }
  }, []);

  const setUser = (userData: Partial<UserContextType> | null) => {
    if (!userData) {
      localStorage.removeItem("user");
      setUserState({
        userId: "",
        nome: "",
        email: "",
        fotoPerfil: "",
        tipoDeAcesso: "",
        obras: [],
        isLoading: false,
        isAuthenticated: false,
      });
      return;
    }

    const newUser = {
      ...user,
      ...userData,
      isAuthenticated: true,
    };

    localStorage.setItem("user", JSON.stringify(newUser));
    setUserState(newUser);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUserState({
      userId: "",
      nome: "",
      email: "",
      fotoPerfil: "",
      tipoDeAcesso: "",
      obras: [],
      isLoading: false,
      isAuthenticated: false,
    });
  };

  return (
    <UserContext.Provider value={{ ...user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
}
