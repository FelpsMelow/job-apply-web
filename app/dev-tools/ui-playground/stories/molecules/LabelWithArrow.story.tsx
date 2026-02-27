"use client";

import { useState } from "react";
import LabelWithArrow from "@/app/components/molecules/labelWithArrow/LabelWithArrow";
import Button from "@/app/components/atoms/button/Button";
import { PlaygroundStory } from "../../types";

const LabelWithArrowToggle = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Button onClick={() => setCollapsed((c) => !c)}>
      <LabelWithArrow text={collapsed ? "Ver detalhes" : "Fechar"} isCollapsed={collapsed} />
    </Button>
  );
};

const LabelWithArrowStory: PlaygroundStory = {
  id: "molecules-label-with-arrow",
  title: "Molecules/LabelWithArrow",
  componentName: "LabelWithArrow",
  componentPath: "@/app/components/molecules/labelWithArrow/LabelWithArrow.tsx",
  description: "Rótulo compacto com seta para indicar expansão ou colapso.",
  usage: {
    whenToUse: [
      "Controlar listas colapsáveis ou dropdowns",
      "Indicar que há conteúdo adicional escondido",
    ],
    avoidWhen: [
      "Ações principais que deveriam usar botões",
    ],
    rules: [
      "Alternar isCollapsed para refletir o estado atual",
      "Manter textos curtos e diretos",
    ],
    a11y: [
      "Associar a um elemento interativo (ex: Button) para foco e clique",
    ],
    edgeCases: [
      "Textos longos podem quebrar layout compacto",
    ],
  },
  variants: [
    {
      id: "label-arrow-toggle",
      name: "Toggle",
      render: () => <LabelWithArrowToggle />,
    },
    {
      id: "label-arrow-open",
      name: "Aberto",
      render: () => <LabelWithArrow text="Medições" isCollapsed={false} />,
    },
  ],
};

export default LabelWithArrowStory;
