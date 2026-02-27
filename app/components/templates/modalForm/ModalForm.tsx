type ModalFormProps = {
    open: boolean;
    title: string;
    onClose: () => void;
    onConfirm: () => void;
    confirmText?: string;
    loading?: boolean;
    children: React.ReactNode;
};

export function ModalForm({
    open,
    title,
    onClose,
    onConfirm,
    confirmText = "Salvar",
    loading,
    children,
}: ModalFormProps) {
    if (!open) return null;

    return (
        <div className="modal">
            <header>
                <h2>{title}</h2>
                <button onClick={onClose}>✕</button>
            </header>

            <section>{children}</section>

            <footer>
                <button onClick={onClose}>Cancelar</button>
                <button onClick={onConfirm} disabled={loading}>
                    {loading ? "Salvando..." : confirmText}
                </button>
            </footer>
        </div>
    );
}
