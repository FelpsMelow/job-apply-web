"use client";

import clsx from "clsx";
import styles from "./table-cell.module.scss";

type Props = {
    children: React.ReactNode;
    className?: string;
    title?: string;
    align?: "left" | "center" | "right";
};

export default function TableCell({ children, className, title, align = "left" }: Props) {
    return (
        <td className={clsx(styles.td, styles[align], className)} title={title}>
            {children}
        </td>
    );
}
