"use client";

import TaskObservation from "@/app/components/molecules/taskObservation/TaskObservation";
import { PlaygroundStory } from "../../types";

const TaskObservationStory: PlaygroundStory = {
  id: "molecules-task-observation",
  title: "Molecules/TaskObservation",
  componentName: "TaskObservation",
  componentPath: "@/app/components/molecules/taskObservation/TaskObservation.tsx",
  description: "Exibe ou cria observação da tarefa com ícones de ação.",
  usage: {
    whenToUse: [
      "Permitir comentários rápidos em uma tarefa",
      "Mostrar texto atual e permitir edição/abertura",
    ],
    avoidWhen: [
      "Observações longas (considerar modal ou editor dedicado)",
    ],
    rules: [
      "Usar mode='create' quando não há observação",
      "Passar observation quando existir conteúdo",
    ],
    a11y: [
      "Adicionar aria-label nos ícones se usados como botões",
    ],
    edgeCases: [
      "Strings vazias devem cair no modo create",
    ],
  },
  variants: [
    {
      id: "task-observation-create",
      name: "Criar observação",
      render: () => (
        <TaskObservation
          mode="create"
          observation=""
          onClick={() => console.log("criar observação")}
        />
      ),
    },
    {
      id: "task-observation-view",
      name: "Visualizar observação",
      render: () => (
        <TaskObservation
          mode="view"
          observation="Aguardando ajuste de orçamento para iniciar."
          onClick={() => console.log("ver observação")}
        />
      ),
    },
  ],
};

export default TaskObservationStory;
