// app/services/ui/form-drawer.service.ts
export type FormDrawerMode = "create" | "edit" | "view";

export type FormDrawerPayload = {
    title: string;
    subtitle?: string;
    mode: FormDrawerMode;

    // conteúdo do drawer
    content: React.ReactNode;

    // ações
    onSave?: () => void | Promise<void>;
    onDelete?: () => void | Promise<void>;
    onClose?: () => void;

    // labels
    saveLabel?: string;
    deleteLabel?: string;
    closeLabel?: string;

    // estados
    loading?: boolean;
    disableSave?: boolean;
};

type InternalState = (FormDrawerPayload & { open: true }) | { open: false };

type Listener = (state: InternalState) => void;

let state: InternalState = { open: false };
const listeners = new Set<Listener>();

function emit(next: InternalState) {
    state = next;
    listeners.forEach((l) => l(state));
}

export const formDrawer = {
    // subscribe usado pelo provider
    subscribe(listener: Listener) {
        listeners.add(listener);
        listener(state);

        return () => {
            listeners.delete(listener); // ✅ agora retorna void
        };
    },

    getState() {
        return state;
    },

    open(payload: Omit<FormDrawerPayload, "mode">) {
        emit({ ...payload, mode: "create", open: true });
    },

    edit(payload: Omit<FormDrawerPayload, "mode">) {
        emit({ ...payload, mode: "edit", open: true });
    },

    view(payload: Omit<FormDrawerPayload, "mode">) {
        emit({ ...payload, mode: "view", open: true });
    },

    close() {
    if (state.open && state.onClose) state.onClose();
        emit({ open: false });
    },

    // chama a ação de salvar do drawer atual
    async save() {
        if (!state.open) return;
        if (!state.onSave) return;
        await state.onSave();
    },

    async remove() {
        if (!state.open) return;
        if (!state.onDelete) return;
        await state.onDelete();
    },

    setLoading(loading: boolean) {
        if (!state.open) return;
        emit({ ...state, loading });
    },

    setDisableSave(disableSave: boolean) {
        if (!state.open) return;
        emit({ ...state, disableSave });
    },

    update(partial: Partial<FormDrawerPayload>) {
        if (!state.open) return;
        emit({ ...state, ...partial });
    },
};
