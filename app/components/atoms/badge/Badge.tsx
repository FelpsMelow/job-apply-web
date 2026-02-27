"use client";

import clsx from "clsx";
import styles from "./badge.module.scss";

type BadgeVariant = "success" | "warning" | "error" | "neutral";

type BadgeProps = {
    variant?: BadgeVariant;
    children: React.ReactNode;
    className?: string;
};

export default function Badge({ variant = "neutral", children, className }: BadgeProps) {
    return (
        <span className={clsx(styles.badge, styles[variant], className)}>
            {children}
        </span>
    );
}