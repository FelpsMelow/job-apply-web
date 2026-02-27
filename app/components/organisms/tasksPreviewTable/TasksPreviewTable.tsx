"use client";

import clsx from "clsx";
import styles from "./tasks-preview-table.module.scss";
import TableHeaderCell from "../../atoms/tableHeaderCell/TableHeaderCell";
import TableCell from "../../atoms/tableCell/TableCell";
import TableRow from "../../molecules/tableRow/TableRow";

type Row = {
    ordem: number;
    mes_planejado: string;
    tarefa: string;
    etapa: string;
    ambiente: string;
    pavimento: number;
    peso: number; // 0..1
    medido?: number; // 0..100
};

type Props = {
    data: Row[];
    className?: string;
};

export default function TasksPreviewTable({ data, className }: Props) {
    return (
        <div className={clsx(styles.wrapper, className)}>
            <div className={styles.scroll}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <TableHeaderCell>#</TableHeaderCell>
                            <TableHeaderCell>Mês</TableHeaderCell>
                            <TableHeaderCell>Tarefa</TableHeaderCell>
                            <TableHeaderCell>Etapa</TableHeaderCell>
                            <TableHeaderCell>Ambiente</TableHeaderCell>
                            <TableHeaderCell align="center">Pav.</TableHeaderCell>
                            <TableHeaderCell align="right">Peso</TableHeaderCell>
                            <TableHeaderCell align="right">% Medido</TableHeaderCell>
                    </tr>
                    </thead>

                    <tbody>
                        {data.map((row) => (
                            <TableRow key={row.ordem}>
                            <TableCell>{row.ordem}</TableCell>
                            <TableCell>{row.mes_planejado}</TableCell>

                            <TableCell className={styles.ellipsis} title={row.tarefa}>
                                {row.tarefa}
                            </TableCell>

                            <TableCell className={styles.ellipsis} title={row.etapa}>
                                {row.etapa}
                            </TableCell>

                            <TableCell>{row.ambiente}</TableCell>
                            <TableCell align="center">{row.pavimento}</TableCell>

                            <TableCell align="right">
                                {(row.peso * 100).toFixed(2)}%
                            </TableCell>
                            <TableCell align="right">
                                {(() => {
                                    const raw = row.medido ?? 0;
                                    const pct = raw <= 1 ? raw * 100 : raw; // se veio como fração (0.2) mostra 20%
                                    return `${pct.toFixed(2)}%`;
                                })()}
                            </TableCell>
                            </TableRow>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
