import React from "react";
import clsx from "clsx";
import "./send-progress-card.scss";
import ProgressBar from "../../molecules/progressBar/ProgressBar";

type SendProgressCardProps = {
    totalTasks: number;
    batchSize: number;

    // progresso em runtime
    currentBatch?: number; // 1-based (ex: 2)
    totalBatches?: number; // (ex: 10)

    isSending?: boolean;
};

export default function SendProgressCard({
    totalTasks,
    batchSize,
    currentBatch = 0,
    totalBatches,
    isSending = false,
}: SendProgressCardProps) {
    const computedTotalBatches =
        totalBatches ?? Math.ceil((totalTasks || 0) / (batchSize || 1));

    const safeTotalBatches = Math.max(0, computedTotalBatches);
    const safeCurrentBatch = Math.min(Math.max(0, currentBatch), safeTotalBatches);

    const pct = safeTotalBatches === 0 ? 0 : Math.round((safeCurrentBatch / safeTotalBatches) * 100);

    return (
        <div className={clsx("send-progress-card", isSending && "send-progress-card--sending")}>
            <div className="send-progress-card-header">
                <div className="send-progress-card-title">Envio para API</div>
                    <div className="send-progress-card-status">
                    {isSending ? "Enviando..." : "Enviado"}
                </div>
            </div>

            <div className="send-progress-card-grid">
                <div className="send-progress-card-metric">
                    <div className="send-progress-card-metric-label">Tarefas</div>
                    <div className="send-progress-card-metric-value">{totalTasks}</div>
                </div>

                <div className="send-progress-card-metric">
                    <div className="send-progress-card-metric-label">Pacotes</div>
                    <div className="send-progress-card-metric-value">{safeTotalBatches}</div>
                </div>

                <div className="send-progress-card-metric">
                    <div className="send-progress-card-metric-label">Tamanho do pacote</div>
                    <div className="send-progress-card-metric-value">{batchSize}</div>
                </div>
            </div>

            <div className="send-progress-card-progress">
                <div className="send-progress-card-progress-row">
                    <span>Pacote</span>
                    <strong>
                        {safeCurrentBatch}/{safeTotalBatches}
                    </strong>
                </div>

                <div className="send-progress-card-bar">
                    <ProgressBar percentage={pct} variant="step"/>
                </div>

            </div>
        </div>
    );
}
