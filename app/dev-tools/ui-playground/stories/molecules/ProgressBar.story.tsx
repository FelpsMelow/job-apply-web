"use client";

import ProgressBar from "@/app/components/molecules/progressBar/ProgressBar";
import { PlaygroundStory } from "../../types";

const ProgressBarStory: PlaygroundStory = {
  id: "molecules-progress-bar",
  title: "Molecules/ProgressBar",
  componentName: "ProgressBar",
  componentPath: "@/app/components/molecules/progressBar/ProgressBar.tsx",
  description: "Barra de progresso para tarefas e etapas com variação task/step.",
  usage: {
    whenToUse: [
      "Mostrar evolução percentual de uma tarefa",
      "Representar progresso de etapas dentro de uma tarefa",
    ],
    avoidWhen: [
      "Progresso indeterminado (usar spinner)",
    ],
    rules: [
      "Definir variant='task' para cabeçalhos e 'step' dentro de listas",
      "Ajustar valores de 0 a 100",
    ],
    a11y: [
      "Combinar com texto de suporte para leitores de tela",
    ],
    edgeCases: [
      "Animar grandes saltos pode causar flicker; valores estáveis são melhores",
    ],
  },
  variants: [
    {
      id: "progress-task",
      name: "Tarefa",
      render: () => <ProgressBar variant="task" percentage={42} />,
    },
    {
      id: "progress-step",
      name: "Etapa",
      render: () => <ProgressBar variant="step" percentage={65} />,
    },
    {
      id: "progress-complete",
      name: "Concluído",
      render: () => <ProgressBar variant="task" percentage={100} />,
    },
    {
      id: "progress-low",
      name: "Baixo progresso",
      render: () => <ProgressBar variant="task" percentage={8} />,
    },
  ],
};

export default ProgressBarStory;
