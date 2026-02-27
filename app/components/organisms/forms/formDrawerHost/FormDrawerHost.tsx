"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { formDrawer, FormDrawerMode } from "@/app/services/ui/formDrawer.service";
import "./form-drawer-host.scss";
import Button from "@/app/components/atoms/button/Button";
import Text from "@/app/components/atoms/text/Text";

type DrawerState = | { open: false } | {
    open: true;
    title: string;
    subtitle?: string;
    mode: FormDrawerMode;
    content: React.ReactNode;
    onSave?: () => void | Promise<void>;
    onDelete?: () => void | Promise<void>;
    onClose?: () => void;
    saveLabel?: string;
    deleteLabel?: string;
    closeLabel?: string;
    loading?: boolean;
    disableSave?: boolean;
};

export default function FormDrawerHost() {
    const [mounted, setMounted] = useState(false);
    const [state, setState] = useState<DrawerState>({ open: false });

    useEffect(() => {
        setMounted(true);
        return formDrawer.subscribe((s) => setState(s as DrawerState));
    }, []);

    useEffect(() => {
        if (!state.open) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") formDrawer.close();
        };

        document.addEventListener("keydown", onKeyDown);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = prevOverflow;
        };
    }, [state.open]);

    if (!mounted) return null;
    if (!state.open) return null;

    const isView = state.mode === "view";
    const canSave = !isView && !!state.onSave;

    const saveLabel =
    state.saveLabel || (state.mode === "create" ? "Criar" : state.mode === "edit" ? "Salvar alterações" : "Fechar");
    const closeLabel = state.closeLabel || "Cancelar";
    const deleteLabel = state.deleteLabel || "Excluir";

    return createPortal(
        <div className="form-drawer-host">
            <button type="button" className="form-drawer-host-overlay" onClick={() => formDrawer.close()} aria-label="Fechar" />

            <aside className="form-drawer-host-panel" role="dialog" aria-modal="true" aria-label={state.title}>
                <header className="form-drawer-host-header">
                    <div className="form-drawer-host-header-left">
                        <div className="form-drawer-host-title">
                            <Text size="lg" weight="bold">{state.title}</Text>
                        </div>
                        {
                            state.subtitle ? (
                                <div className="form-drawer-host-subtitle">
                                    <Text size="md" color="secondary">{state.subtitle}</Text>
                                </div>
                            ) : null
                        }
                    </div>

                    <Button variant="danger" className="form-drawer-host-close" onClick={() => formDrawer.close()} aria-label="Fechar">
                        ×
                    </Button>
                </header>

                <div className="form-drawer-host-content">
                    <div className={`form-drawer-host-body ${isView ? "form-drawer-host-body-view" : ""}`}>{state.content}</div>
                </div>

                <footer className="form-drawer-host-footer">
                    <Button variant="primary" className="form-drawer-host-secondary" onClick={() => formDrawer.close()} disabled={!!state.loading}>
                        {closeLabel}
                    </Button>

                    <div className="form-drawer-host-footer-right">
                        {state.mode === "edit" && state.onDelete ? (
                            <Button
                                variant="danger"
                                className="form-drawer-host-danger"
                                onClick={() => formDrawer.remove()}
                                disabled={!!state.loading}
                            >
                                {deleteLabel}
                            </Button>
                        ) : null}

                        {canSave ? (
                            <Button
                                variant="danger"
                                className="form-drawer-host-primary"
                                onClick={() => formDrawer.save()}
                                disabled={!!state.loading || !!state.disableSave}
                            >
                                {state.loading ? "Salvando..." : saveLabel}
                            </Button>
                        ) : (
                            <Button type="button" className="form-drawer-host-primary" onClick={() => formDrawer.close()}>
                                {saveLabel}
                            </Button>
                        )}
                    </div>
                </footer>
            </aside>
        </div>,
        document.body
    );
}
