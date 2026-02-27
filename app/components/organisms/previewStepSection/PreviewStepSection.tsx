"use client";

import styles from "./preview-step-section.module.scss";
import PreviewMeta from "../../molecules/previewMeta/PreviewMeta";
import TasksPreviewTable from "../../organisms/tasksPreviewTable/TasksPreviewTable";

type Row = {
    ordem: number;
    mes_planejado: string;
    tarefa: string;
    etapa: string;
    ambiente: string;
    pavimento: number;
    peso: number;
    medido?: number;
};

type Props = {
    data: Row[];
    totalRows: number;
    showing: number;
    validRows?: number;
};

export default function PreviewStepSection({ data, totalRows, showing, validRows }: Props) {
    return (
        <section className={styles.card}>
            <PreviewMeta totalRows={totalRows} showing={showing} validRows={validRows} />
            <TasksPreviewTable data={data} />
        </section>
    );
}
