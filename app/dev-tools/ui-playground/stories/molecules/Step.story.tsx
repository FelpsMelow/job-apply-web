"use client";

import Step from "@/app/components/molecules/step/Step";
import { PlaygroundStory } from "../../types";

const StepStory: PlaygroundStory = {
  id: "molecules-step",
  title: "Molecules/Step",
  componentName: "Step",
  componentPath: "@/app/components/molecules/step/Step.tsx",
  description: "Cartão de etapa com barra de progresso e peso da etapa.",
  usage: {
    whenToUse: [
      "Listar etapas dentro de uma tarefa",
      "Permitir abertura de medições individuais",
    ],
    avoidWhen: [
      "Fluxos onde as etapas não são clicáveis ou não há progresso",
    ],
    rules: [
      "Preencher percentageStepProgress de 0 a 100",
      "Usar isOutOfMonth para destacar etapas fora do mês filtrado",
    ],
    a11y: [
      "Adicionar aria-label no container se for usado como botão",
    ],
    edgeCases: [
      "Valores negativos ou acima de 100 não são suportados",
    ],
  },
  variants: [
    {
      id: "step-default",
      name: "Dentro do mês",
      render: () => (
        <Step
          stepName="Escavação"
          percentageStepProgress={30}
          weight={25}
          isOutOfMonth={false}
          onClick={() => console.log("abrir medição")}
        />
      ),
    },
    {
      id: "step-out-month",
      name: "Fora do mês",
      render: () => (
        <Step
          stepName="Drenagem"
          percentageStepProgress={10}
          weight={15}
          isOutOfMonth={true}
          onClick={() => console.log("fora do mês")}
        />
      ),
    },
    {
      id: "step-complete",
      name: "Concluída",
      render: () => (
        <Step
          stepName="Concretagem"
          percentageStepProgress={100}
          weight={60}
          isOutOfMonth={false}
          onClick={() => console.log("concluída")}
        />
      ),
    },
  ],
};

export default StepStory;
