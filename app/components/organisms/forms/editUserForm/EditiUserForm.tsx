import { UserEditData } from "@/app/types/forms/userEdit";
import React from "react";

type EditUserFormProps = {
    data: UserEditData;

    // devolve pro pai o estado atual do form sempre que mudar
    onChange: (state: { nome: string; email: string }) => void;
};

export function EditUserForm({ data, onChange }: EditUserFormProps) {
    const [nome, setNome] = React.useState(data.nome);
    const [email, setEmail] = React.useState(data.email);

    // mantém o pai sincronizado (modal vai usar isso no Confirm)
    React.useEffect(() => {
        onChange({ nome, email });
    }, [nome, email, onChange]);

    return (
        <div style={{ display: "grid", gap: 12 }}>
            <label style={{ display: "grid", gap: 6 }}>
                <span>Nome</span>
                <input
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Nome do usuário"
                />
            </label>

            <label style={{ display: "grid", gap: 6 }}>
                <span>Email</span>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@dominio.com"
                />
            </label>
        </div>
    );
}
