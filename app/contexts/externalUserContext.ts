"use client"

import { createContext, useContext } from "react";
import { ExternalUserContextType } from "../types/externalUserContextType";

export const ExternalUserContext = createContext<ExternalUserContextType | undefined>(undefined);

export function useExternalUser() {
    const context = useContext(ExternalUserContext)
    if (!context) {
        throw new Error("useExternalUser deve ser usado dentro de um ExternalUserProvider.")
    }
    return context
}