import "./action-button-table.scss";

interface TableActionButtonsProps {
    onEdit: () => void;
    onDelete: () => void;
    disabled?: boolean;
}

export default function ActionButtonsTable({
    onEdit,
    onDelete,
    disabled = false,
}: TableActionButtonsProps) {
    return (
        <div className={`table-action-buttons ${disabled ? "table-action-buttons-disabled" : ""}`}>
            <button
                type="button"
                className="table-action-buttons-edit"
                onClick={onEdit}
                disabled={disabled}
                aria-label="Editar"
            >
                ✏️
            </button>

            <button
                type="button"
                className="table-action-buttons-delete"
                onClick={onDelete}
                disabled={disabled}
                aria-label="Excluir"
            >
                🗑️
            </button>
        </div>
    );
}
