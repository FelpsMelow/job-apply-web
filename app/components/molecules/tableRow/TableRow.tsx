"use client";

import clsx from "clsx";
import styles from "./table-row.module.scss";

type Props = {
    children: React.ReactNode;
    className?: string;
    clickable?: boolean;
    onClick?: () => void;
};

export default function TableRow({ children, className, clickable, onClick }: Props) {
    return (
        <tr
            className={clsx(styles.tr, clickable && styles.clickable, className)}
            onClick={onClick}
        >
            {children}
        </tr>
    );
}
