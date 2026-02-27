"use client";

import Divider from "@/app/components/atoms/divider/Divider";
import { PlaygroundStory } from "../../types";

const DividerStory: PlaygroundStory = {
  id: "atoms-divider",
  title: "Atoms/Divider",
  componentName: "Divider",
  componentPath: "@/app/components/atoms/divider/Divider.tsx",
  description: "Linha de separação horizontal ou vertical para agrupar conteúdos.",
  usage: {
    whenToUse: [
      "Separar seções em listas e cartões",
      "Delimitar grupos de ações ou informações",
    ],
    avoidWhen: [
      "Espaçamentos já resolvem a separação visual",
      "Layout muito denso que prejudique leitura",
    ],
    rules: [
      "Usar orientation coerente com o eixo do layout",
      "Combinar com espaçamento para reforçar hierarquia",
    ],
    a11y: [
      "Não carrega semântica; usar headings quando necessário",
    ],
    edgeCases: [
      "Verificar contraste em fundos coloridos",
    ],
  },
  variants: [
    {
      id: "divider-horizontal",
      name: "Horizontal",
      render: () => (
        <div style={{ width: "100%", padding: "8px 0" }}>
          <Divider />
        </div>
      ),
    },
    {
      id: "divider-vertical",
      name: "Vertical",
      render: () => (
        <div style={{ height: 48, display: "flex", gap: 8, alignItems: "center" }}>
          <span>Item A</span>
          <Divider orientation="vertical" />
          <span>Item B</span>
        </div>
      ),
    },
  ],
};

export default DividerStory;
