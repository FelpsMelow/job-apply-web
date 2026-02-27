type AccessType = "GESTOR_OBRA" | "ADMIN" | "CLIENTE";

export type UserEditData = {
    id: string;
    nome: string;
    email: string;
    fotoUrl?: string;
    accessType: AccessType;
    obrasSelecionadas: Array<{ id: string; nome: string }>;
};

export const userEditData: UserEditData = {
    id: "usr_9f3a21c8",
    nome: "Tiago Leme",
    email: "ti@engenharialeme.com.br",
    fotoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    accessType: "GESTOR_OBRA",
    obrasSelecionadas: [
        {
            id: "obra_001",
            nome: "Residencial Orion",
        },
        {
            id: "obra_002",
            nome: "Edifício Aurora",
        },
        {
            id: "obra_003",
            nome: "Torre Think",
        },
    ],
};
