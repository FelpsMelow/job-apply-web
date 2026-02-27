"use client";

import Text from "@/app/components/atoms/text/Text";
import { PlaygroundStory } from "../../types";

const TextStory: PlaygroundStory = {
  id: "atoms-text",
  title: "Atoms/Text",
  componentName: "Text",
  componentPath: "@/app/components/atoms/text/Text.tsx",
  description: "Tipografia base com tamanhos, pesos e modos (nowrap, truncate, multiline).",
  usage: {
    whenToUse: [
      "Construir hierarquia tipográfica sem depender de estilos globais",
      "Controlar truncamento em listas e cards",
    ],
    avoidWhen: [
      "Grandes blocos de texto ricos (usar componentes específicos)",
    ],
    rules: [
      "Escolher size/weight conforme semântica",
      "Aplicar mode='truncate' em colunas estreitas",
    ],
    a11y: [
      "Usar as tags semânticas corretas via prop 'as'",
    ],
    edgeCases: [
      "Textos longos com truncate devem ter título completo no title attribute quando necessário",
    ],
  },
  variants: [
    {
      id: "text-default",
      name: "Default",
      render: () => <Text>Texto padrão</Text>,
    },
    {
      id: "text-heading",
      name: "Heading",
      render: () => (
        <Text as="h2" size="xl" weight="bold">
          Título destacado
        </Text>
      ),
    },
    {
      id: "text-truncate",
      name: "Truncate",
      render: () => (
        <div style={{ width: 160 }}>
          <Text mode="truncate">Texto muito longo que deve truncar ao chegar no limite.</Text>
        </div>
      ),
    },
  ],
};

export default TextStory;
