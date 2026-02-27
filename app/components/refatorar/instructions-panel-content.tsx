import React from "react";
import "./instructions-panel-content.scss";

type InstructionsPanelContentProps = {
    downloadHref?: string;
    onDownloadClick?: () => void;
};

export function InstructionsPanelContent({
  downloadHref = "#",
  onDownloadClick,
}: InstructionsPanelContentProps) {
  return (
    <div className="instructions-content">
      {/* Header */}
      <header className="instructions-content-header">
        <span className="material-symbols-outlined instructions-content-header-icon">
          📑
        </span>
        <h2 className="instructions-content-title">Painel de Instruções</h2>
      </header>

      {/* Instructions */}
      <section className="instructions-content-section">
        <div className="instructions-content-section-head">
          <span className="material-symbols-outlined instructions-content-section-icon">
            📤
          </span>
          <h3 className="instructions-content-section-title">
            Instruções de Upload
          </h3>
        </div>

        <ul className="instructions-content-list">
          <li className="instructions-content-item">
            <span className="material-symbols-outlined instructions-content-check">
              ✅
            </span>
            <p className="instructions-content-text">
              <strong>Cabeçalhos das colunas:</strong> devem ser idênticos ao
              modelo padrão para evitar erros de mapeamento.
            </p>
          </li>

          <li className="instructions-content-item">
            <span className="material-symbols-outlined instructions-content-check">
              ✅
            </span>
            <p className="instructions-content-text">
              <strong>Formatos de data:</strong> utilize preferencialmente MM/AA nas colunas de prazo.
            </p>
          </li>

          <li className="instructions-content-item">
            <span className="material-symbols-outlined instructions-content-check">
              ✅
            </span>
            <p className="instructions-content-text">
              <strong>Células vazias:</strong> não deixe linhas em branco entre as
              tarefas; o sistema encerra a leitura.
            </p>
          </li>

          <li className="instructions-content-item">
            <span className="material-symbols-outlined instructions-content-check">
              ✅
            </span>
            <p className="instructions-content-text">
              <strong>Extensões aceitas:</strong> apenas arquivos .xlsx e .xls.
            </p>
          </li>
        </ul>
      </section>

      {/* Download Card */}
      <section className="instructions-content-card">
        <h4 className="instructions-content-card-title">
          <span className="material-symbols-outlined">💾</span>
          Ainda não tem o modelo?
        </h4>

        <p className="instructions-content-card-text">
          Utilize nossa planilha padrão para evitar falhas na importação.
        </p>

        <a
          href={downloadHref}
          className="instructions-content-button"
          onClick={(e) => {
            if (onDownloadClick) {
              e.preventDefault();
              onDownloadClick();
            }
          }}
        >
          <span className="material-symbols-outlined">📊</span>
          Download modelo Excel
        </a>
      </section>
    </div>
  );
}
