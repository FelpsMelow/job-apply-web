"use client";

import { useState } from "react";
import Overlay from "@/app/components/atoms/overlay/Overlay";
import Button from "@/app/components/atoms/button/Button";
import { PlaygroundStory } from "../../types";

const OverlayToggle = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "relative", minHeight: 120 }}>
      <Button onClick={() => setOpen((prev) => !prev)}>
        {open ? "Fechar overlay" : "Abrir overlay"}
      </Button>
      <Overlay isVisible={open} onClick={() => setOpen(false)} />
    </div>
  );
};

const OverlayStory: PlaygroundStory = {
  id: "atoms-overlay",
  title: "Atoms/Overlay",
  componentName: "Overlay",
  componentPath: "@/app/components/atoms/overlay/Overlay.tsx",
  description: "Camada semitransparente para destacar modais ou painéis laterais.",
  usage: {
    whenToUse: [
      "Bloquear interação com o conteúdo ao fundo",
      "Destacar diálogos ou menus sobrepostos",
    ],
    avoidWhen: [
      "Layouts que exigem interação simultânea com o fundo",
    ],
    rules: [
      "Controlar visibilidade via isVisible",
      "Delegar fechamento ao onClick quando fizer sentido",
    ],
    a11y: [
      "Garantir foco no conteúdo sobreposto",
    ],
    edgeCases: [
      "Cuidar para que o overlay não capture scroll em excesso",
    ],
  },
  variants: [
    {
      id: "overlay-toggle",
      name: "Toggle overlay",
      render: () => <OverlayToggle />,
    },
  ],
};

export default OverlayStory;
