"use client";

import { Alert } from "../../organisms/alerts/Alerts";
import Text from "../text/Text";
import Image from "next/image";
import './copyIdButton.scss'

interface TaskCardCopyIdButtonProps {
    id: string;
}

export default function TaskCardCopyIdButton({ id }: TaskCardCopyIdButtonProps) {
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(id);
            Alert({
                type: 'success',
                message: 'ID copiado com sucesso!'
            })
        } catch (error) {
            console.error("❌ Falha ao copiar o ID:", error);
        }
    };

    return (
        <div className="copy-id-button" onClick={handleCopy}>
            <Text as="strong" size="md" weight="medium">
                ID
            </Text>
            <Image
                src="/clipboard-Icon.svg"
                alt="Ícone de copiar ID"
                width={24}
                height={24}
                className="copy-id-icon"
            />
        </div>
    );
}
