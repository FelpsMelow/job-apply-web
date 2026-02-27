"use client";

import GradientFooterBar from "@/app/components/atoms/gradientFooterBar/GradientFooterBar";
import { PlaygroundStory } from "../../types";

const GradientFooterBarStory: PlaygroundStory = {
  id: "atoms-gradient-footer-bar",
  title: "Atoms/GradientFooterBar",
  componentName: "GradientFooterBar",
  componentPath: "@/app/components/atoms/gradientFooterBar/GradientFooterBar.tsx",
  description: "Faixa gradiente utilizada para reforçar identidade visual em rodapés.",
  usage: {
    whenToUse: [
      "Destacar ações em rodapés ou headers fixos",
      "Separar conteúdos em páginas de autenticação",
    ],
    avoidWhen: [
      "Em layouts muito carregados de cores",
    ],
    rules: [
      "Garantir largura total do contêiner pai",
      "Combinar com textos claros para manter contraste",
    ],
    a11y: [
      "Elemento decorativo; não substituir cabeçalhos semânticos",
    ],
    edgeCases: [
      "Verificar contraste em temas diferentes",
    ],
  },
  variants: [
    {
      id: "gradient-footer-default",
      name: "Default",
      render: () => (
        <div style={{ border: "1px solid #e5e5e5", padding: 8 }}>
          <GradientFooterBar />
        </div>
      ),
    },
  ],
};

export default GradientFooterBarStory;
