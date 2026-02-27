// TODO - Mudar isso para o inglês
export interface UserContextType {
    userId: string
    nome: string
    email: string
    fotoPerfil: string
    tipoDeAcesso: string
    obras: string[]
    isLoading: boolean
    isAuthenticated: boolean
    setUser: (user: Partial<UserContextType> | null) => void
    logout: () => void
}
