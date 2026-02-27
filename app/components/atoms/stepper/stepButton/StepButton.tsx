import type React from "react";
import clsx from "clsx";
import styles from "./step-button.module.scss";

type StepButtonProps = React.PropsWithChildren<{
    disabled?: boolean;
    isCurrent?: boolean;
    onClick?: () => void;
}>;

export function StepButton({
    disabled,
    isCurrent,
    onClick,
    children,
}: StepButtonProps) {
    return (
        <button
            type="button"
            disabled={disabled}
            onClick={onClick}
            aria-current={isCurrent ? "step" : undefined}
            className={clsx(
                styles["step-button"],
                isCurrent && styles["step-button--current"],
                disabled && styles["step-button--disabled"],
            )}
        >
            {children}
        </button>
    );
}
