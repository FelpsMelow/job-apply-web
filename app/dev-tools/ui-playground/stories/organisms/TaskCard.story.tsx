"use client";

import TaskCard from "@/app/components/organisms/taskCard/TaskCard";
import Text from "@/app/components/atoms/text/Text";
import { PlaygroundStory } from "../../types";
import { completedTask, nearDueTask, sampleTask } from "../fixtures";

const TaskCardStory: PlaygroundStory = {
  id: "organisms-task-card",
  title: "Organisms/TaskCard",
  componentName: "TaskCard",
  componentPath: "@/app/components/organisms/taskCard/TaskCard.tsx",
  description: "Cartão completo da tarefa com progresso, etapas, prazos e observações.",
  usage: {
    whenToUse: [
      "Listar tarefas de um projeto com suas etapas",
      "Permitir medição e acompanhamento em contexto compacto",
    ],
    avoidWhen: [
      "Exibir dezenas de etapas (preferir página detalhada)",
    ],
    rules: [
      "Fornecer TaskDTO completo, incluindo stages ordenáveis",
      "Controlar estados externos (loading/erro) ao redor do card",
    ],
    a11y: [
      "Garantir que os botões internos tenham descrições claras",
    ],
    edgeCases: [
      "Observação vazia usa modo create",
      "Etapas com 100% desabilitam novas medições",
    ],
  },
  variants: [
    {
      id: "task-card-default",
      name: "Em andamento",
      render: () => <TaskCard task={sampleTask} />,
    },
    {
      id: "task-card-near-due",
      name: "Perto do prazo",
      render: () => <TaskCard task={nearDueTask} />,
    },
    {
      id: "task-card-completed",
      name: "Concluída (success)",
      render: () => <TaskCard task={completedTask} />,
    },
    {
      id: "task-card-loading",
      name: "Loading state",
      description: "Placeholder visual enquanto a tarefa é carregada.",
      render: () => (
        <div
          style={{
            border: "1px dashed #d0d0d0",
            padding: 16,
            borderRadius: 12,
            background: "#f9fafb",
          }}
        >
          <Text as="p" weight="medium">Carregando tarefa...</Text>
          <div style={{ height: 12, background: "#e6e6e6", borderRadius: 8, marginTop: 8 }} />
        </div>
      ),
    },
    {
      id: "task-card-error",
      name: "Erro / Empty",
      description: "Estado para quando a API falha ou não há dados.",
      render: () => (
        <div
          style={{
            border: "1px solid #f5c2c7",
            padding: 16,
            borderRadius: 12,
            background: "#fff5f5",
          }}
        >
          <Text as="p" weight="bold" color="primary">
            Não foi possível carregar a tarefa.
          </Text>
          <Text as="p" size="sm">
            Tente novamente ou verifique sua conexão.
          </Text>
        </div>
      ),
    },
    {
      id: "task-card-offline",
      name: "Offline",
      description: "Fallback quando não há rede (evita abrir modais de medição).",
      render: () => (
        <div
          style={{
            border: "1px solid #f0d9a9",
            padding: 16,
            borderRadius: 12,
            background: "#fffaf0",
          }}
        >
          <Text as="p" weight="bold">Você está offline</Text>
          <Text as="p" size="sm">Reveja as medições mais tarde ou ative o modo offline do app.</Text>
        </div>
      ),
    },
  ],
  contexts: [
    {
      title: "Cards lado a lado",
      description: "Visual de lista com tarefas em diferentes estados.",
      render: () => (
        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
          <TaskCard task={sampleTask} />
          <TaskCard task={nearDueTask} />
          <TaskCard task={completedTask} />
        </div>
      ),
    },
  ],
};

export default TaskCardStory;
