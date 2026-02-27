"use client";

import clsx from "clsx";
import styles from "./table-header-cell.module.scss";

type Props = {
    children: React.ReactNode;
    align?: "left" | "center" | "right";
    className?: string;
};

export default function TableHeaderCell({ children, align = "left", className }: Props) {
    return (
        <th className={clsx(styles.th, styles[align], className)}>
            {children}
        </th>
    );
}
