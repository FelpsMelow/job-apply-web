"use client";

import { useEffect, useState } from "react";
import BaseModal from "./Modal";
import { Modal as ModalService, ModalOptions } from "@/app/services/ui/modal.service";

type ModalStateLocal = {
    isOpen: boolean;
    options: ModalOptions | null;
};

export default function ModalHost() {
    const [state, setState] = useState<ModalStateLocal>({ isOpen: false, options: null });

    useEffect(() => {
        const unsubscribe = ModalService.subscribe((s) => {
            setState({ isOpen: s.isOpen, options: s.options });
        });

        return unsubscribe;
    }, []);

    if (!state.options) return null;

    const opts = state.options;

    return (
        <BaseModal
            title={opts.title}
            isOpen={state.isOpen}
            isDesabled={opts.isDesabled ?? false}
            isLoading={opts.isLoading ?? false}
            closeOnOverlayClick={opts.closeOnOverlayClick ?? true}
            onClose={() => {
                opts.onClose?.();
                ModalService.close();
            }}
            onSave={async () => {
                await opts.onSave?.();
                ModalService.close();
            }}
        >
            {opts.children}
        </BaseModal>
    );
}
