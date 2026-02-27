import { createExternalUser, delExternalUser, getListExternalUsers, patchUpdateExternalUser } from "@/app/services/api/user.service";
import ExternalUserForm, { ExternalUserFormRef } from "../../organisms/forms/externalUserForm/ExternalUserForm";
import { filterExternalUsersByName } from "@/app/utils/filters/filterExternalUsersByName";
import { useEffect, useRef, useState } from "react";
import { normalizeProjectIds } from "@/app/utils/normalizeProjectIds";
import { useExternalUser } from "@/app/contexts/externalUserContext";
import { getListProjects } from "@/app/services/api/projects.service";
import { formDrawer } from "@/app/services/ui/formDrawer.service";
import { ProjectDTO } from '../../../dtos/externalUser.dto';
import { Modal } from "@/app/services/ui/modal.service";
import { Alert } from "../../organisms/alerts/Alerts";
import ExternalUsersTable from "../../organisms/externalUsersTable/ExternalUsersTable";
import UserListItem from "../../organisms/externalUsersTable/userListItem/UserListItem";
import Pagination from "../../refatorar/tableExternalUsersPagination/TableExternalUsersPagination";
import Divider from '../../atoms/divider/Divider';
import Button from "../../atoms/button/Button";
import Input from "../../atoms/input/Input";
import Text from "../../atoms/text/Text";
import "./users-template.scss";

export default function UsersTemplate() {

    const [searchTerm, setSearchTerm] = useState("")
    const { externalUsers, setExternalUsersState, updateExternalUser } = useExternalUser()

    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(4);

    const filteredUsers = filterExternalUsersByName(externalUsers, searchTerm);
    const totalItems = filteredUsers.length;
    const pagedUsers = filteredUsers.slice((page - 1) * pageSize, page * pageSize);

    const { deleteExternalUser } = useExternalUser()

    const formRef = useRef<ExternalUserFormRef>(null);


    useEffect(() => {
        async function fetchUsers () {
            try {
                await getListExternalUsers().then((res) => {
                    setExternalUsersState(res)
                })
            } catch (error) {
                Alert({type: 'error', message: 'Error fetching external users'})
            }
        }

        fetchUsers()

    }, [])

    useEffect(() => {
        console.log("Searching for:", searchTerm);
    }, [searchTerm]);

    async function handleDeleteUser(userId: string) {

        
        try {
            await delExternalUser(userId).then(() => {
                deleteExternalUser(userId)
            }) 
            Alert({
                type: "success",
                message: "Usuário deletado com sucesso",
            });
        } catch (error: any) {
            Alert({
                type: "error",
                message: "Erro ao deletar o usuário. Tente novamente.",
            });
        }
    }

    async function handleEditUser(userId: string) {
        console.log("Edit user:", userId);
    }
    
    function askDelete(userId: string) {
        const currentUser = externalUsers.find((u) => u._id === userId);
        Modal.open({
            title: "Excluir usuário",
            children: <>
                <Text>Tem certeza que deseja excluir este usuário?</Text>
                <br/>
                <UserListItem name={currentUser?.name || "Usuário desconhecido"} email={currentUser?.email || ""} avatarUrl={currentUser?.profilePhoto || ""}/>
            </>,
            onSave: async () => {
                await handleDeleteUser(userId);
            },
            onClose: () => {
                console.log("Usuário cancelou");
            },
        });
    }
    
    async function askEdit(userId: string) {
        const currentUser = externalUsers.find((u) => u._id === userId);

        const listProjects = await getListProjects();

        const projects = await listProjects.projects.map((project) => ({ id: project.id, label: project.name }))

        formDrawer.edit({
            title: "Editar Usuário",
            content: (
                <ExternalUserForm
                    ref={formRef}
                    mode="edit"
                    currentUser={currentUser}
                    initialValues={{
                        name: currentUser?.name,
                        email: currentUser?.email,
                        profilePhoto: currentUser?.profilePhoto,
                        accessType: currentUser?.accessType,
                        projects: currentUser?.projects.map((project: ProjectDTO)=> project.id) || [],
                    }}
                    availableProjects={projects}
                />
            ),
            onSave: async () => {
                formDrawer.setLoading(true);

                const payload = await formRef.current?.submit();
                if (!payload) {
                    formDrawer.setLoading(false);
                    return;
                }

                console.log("Payload to save:", payload);

                await patchUpdateExternalUser(userId, payload).then(() => {

                    // Eu não estou usando o meu res aqui pq o meu backend muda o id no response get > id e put > _id, então fica mais fácil atualizar o usuário usando o id antigo mesmo, já que o backend não tá me retornando o id atualizado (com _id) no response do put/patch

                    updateExternalUser(userId, {
                        name: payload.name,
                        email: payload.email,
                        profilePhoto: payload.profilePhoto,
                        accessType: payload.accessType,
                        projects: normalizeProjectIds(payload.projects, listProjects.projects),
                    });
                    Alert({
                        type: "success",
                        message: "Usuário atualizado com sucesso",
                    });
                })


                formDrawer.setLoading(false);
                formDrawer.close();
            },
        });
    }
    
    async function askCreate() {
        const projects = await (await getListProjects()).projects.map((project) => ({ id: project.id, label: project.name }))

        formDrawer.open({
            title: "Criar Usuário",
            content: (
                <ExternalUserForm
                    ref={formRef}
                    mode="create"
                    currentUser={undefined}
                    initialValues={{}}
                    availableProjects={projects}
                />
            ),
            onSave: async () => {
                formDrawer.setLoading(true);
    
                const payload = await formRef.current?.submit();
                if (!payload) {
                    formDrawer.setLoading(false);
                    return;
                }
    
                await createExternalUser({
                    name: payload.name,
                    email: payload.email,
                    // TODO - Editar o foms para ele pedir o password no mode criação
                    password: "leme@2026",
                    accessType: payload.accessType,
                    profilePhoto: payload.profilePhoto,
                }).then(() => {
                    // TODO - Colocar para atualizar a lista de usuários sem precisar dar refresh na página, talvez dando um getListExternalUsers de novo ou algo do tipo, porque o backend não tá me retornando o usuário criado no response do post, então não tem como eu adicionar o usuário criado na minha lista de usuários sem dar um getListExternalUsers de novo pra pegar o usuário criado com o id atualizado (com _id)
                    Alert({
                        type: "success",
                        message: "Usuário criado com sucesso. A senha padrão é 'leme@2026'.",
                    });
                })
    
                formDrawer.setLoading(false);
                formDrawer.close();
            },
        });

    }

    return (
        <div className="users-template">
            <header className="users-template-header">
                <div className="users-template-header-text-container">
                    <Text as="strong" size="xl">
                        Gestão de usuários
                    </Text>
                    <Text>
                        Gerencie os acessos e permissões dos usuários da plataforma.
                    </Text>
                </div>
                <div className="users-template-header-inputs-container">
                    <Input
                        placeholder="Buscar usuários..."
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value={searchTerm}
                    />
                    <Button onClick={askCreate}>
                        + Novo Usuário
                    </Button>
                </div>
            </header>
            <main>
                <div>
                    <ExternalUsersTable
                        externalUsers={pagedUsers}
                        onDelete={ (userId: string) => askDelete(userId)}
                        onEdit={(userId: string) => askEdit(userId)}
                    />
                    <Pagination
                        totalItems={totalItems}
                        page={page}
                        pageSize={pageSize}
                        onPageChange={setPage}
                        onPageSizeChange={setPageSize}
                        pageSizeOptions={[4, 10, 25, 50]}
                    />

                </div>
            </main>
            <footer className="users-template-footer">
                <Divider/>
                <Text size="sm" align="center">
                    © 2024 Engenharia Leme - Plataforma Integrada de Gestão
                </Text>
            </footer>
        </div>
    );
}