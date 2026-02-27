"use client";

import TaskCardHeader from "@/app/components/molecules/taskCardHeader/TaskCardHeader";
import { PlaygroundStory } from "../../types";

const TaskCardHeaderStory: PlaygroundStory = {
  id: "molecules-task-card-header",
  title: "Molecules/TaskCardHeader",
  componentName: "TaskCardHeader",
  componentPath: "@/app/components/molecules/taskCardHeader/TaskCardHeader.tsx",
  description: "Cabeçalho da tarefa com título e botão de copiar ID.",
  usage: {
    whenToUse: [
      "Destacar nome da tarefa em cartões ou páginas de detalhe",
      "Facilitar suporte copiando rapidamente o ID",
    ],
    avoidWhen: [
      "Fluxos onde o ID não deve ser exposto",
    ],
    rules: [
      "Fornecer taskTitle e taskId válidos",
      "Manter nomes curtos para evitar truncamento",
    ],
    a11y: [
      "Garantir contraste do título e botão",
    ],
    edgeCases: [
      "Títulos longos serão truncados; incluir tooltip se necessário",
    ],
  },
  variants: [
    {
      id: "task-card-header-default",
      name: "Default",
      render: () => <TaskCardHeader taskTitle="Fundação Torre 1" taskId="TASK-001" />,
    },
    {
      id: "task-card-header-long",
      name: "Título longo",
      render: () => (
        <TaskCardHeader
          taskTitle="Execução de Infraestrutura e Preparação Completa do Terreno"
          taskId="TASK-002-LONG"
        />
      ),
    },
  ],
};

export default TaskCardHeaderStory;
