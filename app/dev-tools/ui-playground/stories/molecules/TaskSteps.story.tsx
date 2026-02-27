"use client";

import TaskSteps from "@/app/components/molecules/taskSteps/TaskSteps";
import { PlaygroundStory } from "../../types";
import { sampleStages } from "../fixtures";

const TaskStepsStory: PlaygroundStory = {
  id: "molecules-task-steps",
  title: "Molecules/TaskSteps",
  componentName: "TaskSteps",
  componentPath: "@/app/components/molecules/taskSteps/TaskSteps.tsx",
  description: "Lista de etapas de uma tarefa com medição e modal integrado.",
  usage: {
    whenToUse: [
      "Exibir etapas ordenadas de uma tarefa",
      "Abrir modal de medição ao clicar em uma etapa",
    ],
    avoidWhen: [
      "Listas sem interação ou sem progresso",
    ],
    rules: [
      "Fornecer steps com scheduleDate para ordenação",
      "Passar taskId para identificar a tarefa no modal",
    ],
    a11y: [
      "Garantir foco dentro do modal ao abrir",
    ],
    edgeCases: [
      "Etapas com datas futuras são marcadas como fora do mês (isAfterMonthYear)",
    ],
  },
  variants: [
    {
      id: "task-steps-collapsed",
      name: "Colapsado",
      render: () => (
        <TaskSteps
          taskId="task-steps-1"
          steps={sampleStages}
          isCollapsed={true}
        />
      ),
    },
    {
      id: "task-steps-open",
      name: "Expandido",
      render: () => (
        <TaskSteps
          taskId="task-steps-1"
          steps={sampleStages}
          isCollapsed={false}
        />
      ),
    },
  ],
};

export default TaskStepsStory;
