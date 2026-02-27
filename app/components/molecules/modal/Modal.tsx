// components/molecules/modal/Modal.tsx
import React, { ReactNode, useEffect } from "react";
import Button from "../../atoms/button/Button";
import Text from "../../atoms/text/Text";
import clsx from "clsx";
import "./modal.scss";

interface ModalProps {
    title: string
    isOpen: boolean;
    isDesabled: boolean;
    isLoading: boolean;
    onClose: () => void;
    onSave: () => void;
    children: ReactNode;
    closeOnOverlayClick?: boolean;
}

export default function Modal({ title, isOpen, isDesabled, isLoading, onClose, onSave, children, closeOnOverlayClick = true }: ModalProps) {
    
    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";
        return () => { document.body.style.overflow = "auto"; };
    }, [isOpen]);

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget && closeOnOverlayClick) {
            onClose();
        }
    };

    return (
        <div
            className={clsx("modal-overlay", { "modal-overlay--open": isOpen })}
            onClick={handleOverlayClick}
        >
            <div className={clsx("modal-content", { "modal-content--open": isOpen })}>
                <Text
                    as='h1'
                    size='md'
                    mode='truncate'
                    weight='bold'
                >
                    {title}
                </Text>
                <br /><br />
                {children}
                <br />
                <div className="modal-buttons-container">
                    <Button onClick={onClose} variant='secondary'>
                        Cancelar
                    </Button>
                    <Button
                        disabled={isDesabled}
                        onClick={onSave}
                        isLoading={isLoading}
                    >
                        Salvar
                    </Button>
                </div>
            </div>
        </div>
    );
}
