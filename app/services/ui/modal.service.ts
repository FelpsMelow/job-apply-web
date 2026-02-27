import { ReactNode } from "react";

export type ModalOptions = {
    title: string;

    children: ReactNode;

    isDesabled?: boolean;
    isLoading?: boolean;
    closeOnOverlayClick?: boolean;

    onSave: () => void | Promise<void>;
    onClose?: () => void;
};

type ModalState = | { isOpen: false; options: null } | { isOpen: true; options: ModalOptions };

let state: ModalState = { isOpen: false, options: null };
const listeners = new Set<(s: ModalState) => void>();

function emit() {
    listeners.forEach((fn) => fn(state));
}

export const Modal = {
    subscribe(fn: (s: ModalState) => void) {
        listeners.add(fn);
        fn(state);

        return () => {
            listeners.delete(fn);
        };
    },

    open(options: ModalOptions) {
        state = { isOpen: true, options };
        emit();
    },

    close() {
        state = { isOpen: false, options: null };
        emit();
    },
};
