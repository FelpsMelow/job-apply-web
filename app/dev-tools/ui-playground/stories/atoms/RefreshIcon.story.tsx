"use client";

import RefreshIcon from "@/app/components/atoms/icons/refreshIcon/RefreshIcon";
import { PlaygroundStory } from "../../types";

const RefreshIconStory: PlaygroundStory = {
  id: "atoms-refresh-icon",
  title: "Atoms/RefreshIcon",
  componentName: "RefreshIcon",
  componentPath: "@/app/components/atoms/icons/refreshIcon/RefreshIcon.tsx",
  description: "Ícone de atualização com estado visual para novidades.",
  usage: {
    whenToUse: [
      "Indicar que há dados novos disponíveis",
      "Ações manuais de refresh em listas",
    ],
    avoidWhen: [
      "Substituir spinners de carregamento de tela cheia",
    ],
    rules: [
      "Definir hasUpdate=true quando houver dados recentes",
    ],
    a11y: [
      "Associar a um botão com aria-label adequado",
    ],
    edgeCases: [
      "Combinar com animação apenas quando necessário",
    ],
  },
  variants: [
    {
      id: "refresh-default",
      name: "Sem atualização",
      render: () => <RefreshIcon hasUpdate={false} />,
    },
    {
      id: "refresh-has-update",
      name: "Com atualização",
      render: () => <RefreshIcon hasUpdate={true} />,
    },
  ],
};

export default RefreshIconStory;
