"use client";

import clsx from "clsx";
import styles from "./preview-meta.module.scss";
import Badge from "../../atoms/badge/Badge";

type Props = {
    totalRows: number;
    showing: number;
    validRows?: number;
    className?: string;
};

export default function PreviewMeta({ totalRows, showing, validRows, className }: Props) {
    return (
        <div className={clsx(styles.meta, className)}>
            <div className={styles.left}>
                <span className={styles.title}>Pré-visualização</span>
                <span className={styles.subtitle}>
                    Exibindo <b>{showing}</b> de <b>{totalRows}</b> linhas
                </span>
            </div>

            <div className={styles.right}>
                <Badge variant="success">{validRows ?? showing} linhas válidas</Badge>
            </div>
        </div>
    );
}
