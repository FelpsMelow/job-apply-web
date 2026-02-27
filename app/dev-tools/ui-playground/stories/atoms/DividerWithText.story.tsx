"use client";

import DividerWithText from "@/app/components/atoms/dividerWithText/DividerWithText";
import { PlaygroundStory } from "../../types";

const DividerWithTextStory: PlaygroundStory = {
  id: "atoms-divider-with-text",
  title: "Atoms/DividerWithText",
  componentName: "DividerWithText",
  componentPath: "@/app/components/atoms/dividerWithText/DividerWithText.tsx",
  description: "Separador com texto central para indicar alternativas ou mudanças de contexto.",
  usage: {
    whenToUse: [
      "Demarcar opções de autenticação ou fluxo alternativo",
      "Introduzir passos subsequentes em formulários longos",
    ],
    avoidWhen: [
      "Quando o texto pode ser exibido como título ou legenda",
    ],
    rules: [
      "Manter texto curto e direto",
      "Respeitar espaço lateral para evitar quebra inesperada",
    ],
    a11y: [
      "Garantir que o texto descreva a separação",
    ],
    edgeCases: [
      "Textos longos podem quebrar linha; revisar layout",
    ],
  },
  variants: [
    {
      id: "divider-text-default",
      name: "Default",
      render: () => <DividerWithText />,
    },
    {
      id: "divider-text-custom",
      name: "Custom text",
      render: () => <DividerWithText text="Ou continue como convidado" />,
    },
  ],
};

export default DividerWithTextStory;
