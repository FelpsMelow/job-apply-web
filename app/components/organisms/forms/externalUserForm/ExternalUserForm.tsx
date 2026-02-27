"use client";

import React, { forwardRef, useImperativeHandle, useMemo, useState } from "react";
import Text from "@/app/components/atoms/text/Text";
import Input from "@/app/components/atoms/input/Input";
import Button from "@/app/components/atoms/button/Button";
import UserListItem from "@/app/components/organisms/externalUsersTable/userListItem/UserListItem";
import "./external-user-form.scss";

export type ExternalUserFormMode = "create" | "edit" | "view";

export type ExternalUserFormValues = {
    name: string;
    email: string;
    profilePhoto: string;
    accessType: string;
    projects: string[];
};

export type ExternalUserFormRef = {
    submit: () => Promise<ExternalUserFormValues | null>;
    getValues: () => ExternalUserFormValues;
};

type ExternalUserFormProps = {
    mode: ExternalUserFormMode;
    currentUser?: { name?: string; email?: string; profilePhoto?: string; roleLabel?: string };
    initialValues?: Partial<ExternalUserFormValues>;
    accessTypeOptions?: Array<{ value: string; label: string }>;
    availableProjects?: Array<{ id: string; label: string }>;
};

const defaultAccessOptions = [
    { value: "gestor_obra", label: "Gestor de Obra" },
    { value: "admin", label: "Admin" },
    { value: "funcionario", label: "Funcionário" },
];

const ExternalUserForm = forwardRef<ExternalUserFormRef, ExternalUserFormProps>(({ mode, currentUser, initialValues, accessTypeOptions = defaultAccessOptions, availableProjects = [] }, ref) => {
    const isView = mode === "view";

    const [name, setName] = useState(initialValues?.name ?? currentUser?.name ?? "");
    const [email, setEmail] = useState(initialValues?.email ?? currentUser?.email ?? "");
    const [profilePhoto, setProfilePhoto] = useState(initialValues?.profilePhoto ?? currentUser?.profilePhoto ?? "");
    const [accessType, setAccessType] = useState(initialValues?.accessType ?? accessTypeOptions[0]?.value ?? "");
    const [projects, setProjects] = useState<string[]>(initialValues?.projects ?? []);

    const [projectPickerOpen, setProjectPickerOpen] = useState(false);
    const [projectToAdd, setProjectToAdd] = useState<string>(availableProjects[0]?.id ?? "");

    const values = useMemo<ExternalUserFormValues>(
        () => ({ name, email, profilePhoto, accessType, projects }),
        [name, email, profilePhoto, accessType, projects]
    );

    const getProjectLabel = (id: string) => availableProjects.find((p) => p.id === id)?.label ?? id;

    const addProject = (id: string) => {
        if (!id) return;
        setProjects((prev) => (prev.includes(id) ? prev : [...prev, id]));
    };

    const removeProject = (id: string) => {
        setProjects((prev) => prev.filter((p) => p !== id));
    };

    useImperativeHandle(ref, () => ({
        async submit() {
            if (isView) return null;

            // validação mínima (depois você troca por zod/rhf)
            if (!values.name.trim()) return null;
            if (!values.email.trim()) return null;

            return values;
        },
        getValues() {
            return values;
        },
    }));

    return (
        <div className={`external-user-form external-user-form-${mode}`}>
            <div className="external-user-form-user">
            <UserListItem
                name={currentUser?.name || name || "Usuário desconhecido"}
                email={currentUser?.email || email || ""}
                avatarUrl={currentUser?.profilePhoto || profilePhoto || ""}
                mode="white"
            />

            {currentUser?.roleLabel ? (
                <div className="external-user-form-user-role">
                <Text size="sm" color="secondary">{currentUser.roleLabel}</Text>
                </div>
            ) : null}
            </div>

            <div className="external-user-form-section">
            <div className="external-user-form-field">
                <label className="external-user-form-label">
                <Text size="sm" weight="medium">Nome Completo</Text>
                </label>
                <Input placeholder="Nome completo" value={name} onChange={(e) => setName(e.target.value)} disabled={isView} />
            </div>

            <div className="external-user-form-field">
                <label className="external-user-form-label">
                <Text size="sm" weight="medium">E-mail</Text>
                </label>
                <Input placeholder="email@dominio.com" value={email} onChange={(e) => setEmail(e.target.value)} disabled={isView} />
            </div>

            <div className="external-user-form-field">
                <label className="external-user-form-label">
                <Text size="sm" weight="medium">URL da Foto de Perfil</Text>
                </label>
                <Input placeholder="https://..." value={profilePhoto} onChange={(e) => setProfilePhoto(e.target.value)} disabled={isView} />
            </div>

            <div className="external-user-form-field">
                <label className="external-user-form-label">
                <Text size="sm" weight="medium">Tipo de Acesso</Text>
                </label>

                <div className="external-user-form-select-wrap">
                <select
                    className="external-user-form-select"
                    value={accessType}
                    onChange={(e) => setAccessType(e.target.value)}
                    disabled={isView}
                >
                    {accessTypeOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                </select>
                <span className="external-user-form-select-icon">▾</span>
                </div>
            </div>
            </div>

            <div className="external-user-form-divider" />

            <div className="external-user-form-section">
                <div className="external-user-form-projects-header">
                    <div className="external-user-form-projects-title">
                        <span className="external-user-form-projects-dot" />
                        <Text as="strong" size="md" weight="bold">Gestão de Obras</Text>
                    </div>

                    <div className="external-user-form-badge">
                        <Text size="xs" color="secondary">{projects.length} Ativas</Text>
                    </div>
                </div>

                <div className="external-user-form-projects">
                    {projects.map((id) => (
                        <button
                            key={id}
                            type="button"
                            className="external-user-form-chip"
                            onClick={() => !isView && removeProject(id)}
                            disabled={isView}
                        >
                            <Text size="sm">{getProjectLabel(id)}</Text>
                            {!isView ? <span className="external-user-form-chip-x">×</span> : null}
                        </button>
                    ))}

                    {!isView ? (
                        <>
                            <button type="button" className="external-user-form-add" onClick={() => setProjectPickerOpen((v) => !v)}>
                                <Text size="sm" weight="medium">Adicionar Obra</Text>
                            </button>

                            {projectPickerOpen ? (
                                <div className="external-user-form-add-panel">
                                    <select
                                        className="external-user-form-add-select"
                                        value={projectToAdd}
                                        onChange={(e) => setProjectToAdd(e.target.value)}
                                    >
                                        {availableProjects.length === 0 ? (
                                            <option value="">Nenhuma obra disponível</option>
                                        ) : (
                                            availableProjects.map((p) => (
                                                <option key={p.id} value={p.id}>
                                                    <Text
                                                        size="sm"
                                                        mode="truncate"
                                                    >
                                                        {p.label}
                                                    </Text>
                                                </option>
                                            ))
                                        )}
                                    </select>

                                    <Button
                                        variant="secondary"
                                        onClick={() => {
                                            addProject(projectToAdd);
                                            setProjectPickerOpen(false);
                                        }}
                                        disabled={!projectToAdd}
                                    >
                                        Adicionar
                                    </Button>
                                </div>
                            ) : null}
                        </>
                    ) : null}
                </div>
            </div>
        </div>
    );
});

ExternalUserForm.displayName = "ExternalUserForm";
export default ExternalUserForm;
