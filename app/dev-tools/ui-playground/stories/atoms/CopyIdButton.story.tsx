"use client";

import TaskCardCopyIdButton from "@/app/components/atoms/copyIdButton/copyIdButton";
import { PlaygroundStory } from "../../types";

const CopyIdButtonStory: PlaygroundStory = {
  id: "atoms-copy-id-button",
  title: "Atoms/CopyIdButton",
  componentName: "TaskCardCopyIdButton",
  componentPath: "@/app/components/atoms/copyIdButton/copyIdButton.tsx",
  description: "Atalho para copiar o ID da tarefa e disparar um toast de sucesso.",
  usage: {
    whenToUse: [
      "Exibir identificadores técnicos para suporte/QA",
      "Listas ou cabeçalhos de tarefas",
    ],
    avoidWhen: [
      "IDs sensíveis que não devem ser expostos",
      "Contextos sem clipboard (por exemplo, crawlers)",
    ],
    rules: [
      "Garantir que o ID esteja disponível na prop id",
      "Exigir ToastContainer na árvore para exibir alertas",
    ],
    a11y: [
      "Adicionar rótulo claro sobre a ação de copiar",
    ],
    edgeCases: [
      "Tratar falha de permissão do clipboard",
    ],
  },
  variants: [
    {
      id: "copy-id-default",
      name: "Default",
      render: () => <TaskCardCopyIdButton id="TASK-123456" />,
    },
    {
      id: "copy-id-long",
      name: "ID longo",
      description: "Mostra truncamento do texto ID.",
      render: () => <TaskCardCopyIdButton id="TASK-123456-ABC-XYZ-LONG" />,
    },
  ],
};

export default CopyIdButtonStory;
