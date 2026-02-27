import { delExternalUser, patchUpdateExternalUser } from "@/app/services/api/user.service";
import { useExternalUser } from "@/app/contexts/externalUserContext";
import { ExternalUserDTO } from "@/app/dtos/externalUser.dto";
import { formatLastLogin } from "@/app/utils/views/formatLastLogin";
import { Alert } from "../alerts/Alerts";
import ActionButtonsTable from "./actionButtonsTable/ActionButtonTable";
import TableHeaderCell from "../../atoms/tableHeaderCell/TableHeaderCell";
import UserListItem from "./userListItem/UserListItem";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Toggle from "../../molecules/toggle/Toggle";
import Image from "next/image";
import "./external-users-table.scss";

interface ExternalUsersTableProps {
    externalUsers: Array<ExternalUserDTO>;
    onEdit?: (userId: string) => void;
    onDelete?: (userId: string) => void;
}

export default function ExternalUsersTable({ externalUsers, onEdit, onDelete }: ExternalUsersTableProps) {

    const { updateExternalUser } = useExternalUser()
    
    async function handleToggle(userId: string, nextStatus: boolean) {
        try {
            const res = await patchUpdateExternalUser(userId, { status: nextStatus });

            updateExternalUser(res._id, { status: res.status });

            Alert({
                type: "success",
                message: "Status do usuário atualizado com sucesso",
            });

        } catch (error: any) {
            console.error("Erro ao atualizar status do usuário:", error);

            Alert({
                type: "error",
                message:
                error?.response?.data?.message ||
                "Erro ao atualizar o status do usuário. Tente novamente.",
            });

        }
    }


    return (
        <table className={`users-template-table ${externalUsers.length === 0 ? "is-empty" : ""}`}>
            <thead>
                <tr>
                    <TableHeaderCell>Usuário</TableHeaderCell>
                    <TableHeaderCell align="center">Tipo de acesso</TableHeaderCell>
                    <TableHeaderCell align="center">Obras</TableHeaderCell>
                    <TableHeaderCell align="center">Último login</TableHeaderCell>
                    <TableHeaderCell align="center">Status</TableHeaderCell>
                    <TableHeaderCell align="center">Ações</TableHeaderCell>
                </tr>
            </thead>

            <tbody>
                {externalUsers.length === 0 ? (
                    <tr className="users-template-table__empty-row">
                        <td colSpan={6}>
                        <div className="users-template-table__empty">
                            <Image
                                width={1523}
                                height={1024}
                                src="/empty-users-search-1536x1024.png"
                                alt="Nenhum resultado encontrado"
                                className="users-template-table__empty-img"
                            />
                        </div>
                        </td>
                    </tr>
                ) : externalUsers.map((row) => (
                    <TableRow key={row._id}>

                        <TableCell>
                            <UserListItem
                                onClick={() => false}
                                name={row.name}
                                email={row.email}
                                avatarUrl={row.profilePhoto}
                            />
                        </TableCell>
                        <TableCell
                            align="center"
                        >
                            {row.accessType}
                        </TableCell>

                        <TableCell align="center">
                            {
                                row.projects.length > 0
                                ? `${row.projects.length} ${row.projects.length === 1 ? "Obra" : "Obras"}`
                                : "Sem obras"
                            }
                        </TableCell>

                        <TableCell align="center">{formatLastLogin(row.lastLogin)}</TableCell>

                        <TableCell align="center">
                            <Toggle checked={row.status} onChange={(next) => handleToggle(row._id, next)} />
                        </TableCell>

                        <TableCell align="center">
                            <ActionButtonsTable
                                onEdit={() => onEdit && onEdit(row._id)}
                                onDelete={() => onDelete && onDelete(row._id)}
                            />
                        </TableCell>


                    </TableRow>
                ))}
            </tbody>
        </table>
    )

}