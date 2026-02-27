"use client";

import Button from "@/app/components/atoms/button/Button";
import { Alert } from "@/app/components/organisms/alerts/Alerts";
import { PlaygroundStory } from "../../types";

const AlertsStory: PlaygroundStory = {
  id: "organisms-alerts",
  title: "Organisms/Alerts",
  componentName: "Alert (toast)",
  componentPath: "@/app/components/organisms/alerts/Alerts.ts",
  description: "Wrapper para react-toastify com presets de erro, aviso, info e sucesso.",
  usage: {
    whenToUse: [
      "Feedback rápido de ações de usuário",
      "Mensagens não bloqueantes no canto da tela",
    ],
    avoidWhen: [
      "Fluxos que exigem confirmação (use modal)",
      "Mensagens longas ou persistentes",
    ],
    rules: [
      "Manter mensagens curtas e claras",
      "Definir type conforme semântica da ação",
      "Garantir que ToastContainer esteja no layout (já está em layout.tsx)",
    ],
    a11y: [
      "Mensagens devem ser compreensíveis sem contexto visual",
    ],
    edgeCases: [
      "Evitar spam de toasts em loops",
    ],
  },
  variants: [
    {
      id: "alerts-all",
      name: "Tipos",
      description: "Dispara toasts de cada tipo.",
      render: () => (
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Button onClick={() => Alert({ type: "success", message: "Sucesso ao salvar" })}>
            Sucesso
          </Button>
          <Button variant="secondary" onClick={() => Alert({ type: "info", message: "Informação" })}>
            Info
          </Button>
          <Button variant="danger" onClick={() => Alert({ type: "error", message: "Erro ao processar" })}>
            Erro
          </Button>
          <Button variant="secondary" onClick={() => Alert({ type: "warn", message: "Atenção necessária" })}>
            Aviso
          </Button>
        </div>
      ),
    },
  ],
};

export default AlertsStory;
