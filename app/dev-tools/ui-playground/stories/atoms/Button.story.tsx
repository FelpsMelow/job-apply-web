"use client";

import Button from "@/app/components/atoms/button/Button";
import { PlaygroundStory } from "../../types";

const ButtonStory: PlaygroundStory = {
  id: "atoms-button",
  title: "Atoms/Button",
  componentName: "Button",
  componentPath: "@/app/components/atoms/button/Button.tsx",
  description: "Botão primário com suporte a variantes, tamanhos e estados de loading.",
  usage: {
    whenToUse: [
      "Ações principais de fluxos simples",
      "Chamadas secundárias usando variant='secondary' ou 'link'",
      "Feedback imediato de carregamento via isLoading",
    ],
    avoidWhen: [
      "Ações destrutivas sem confirmar com o usuário",
      "Fluxos que precisam de steps ou formulários complexos",
    ],
    rules: [
      "Usar variant coerente com a hierarquia da ação",
      "Combinar size com o espaço disponível no layout",
      "Aplicar isLoading para evitar cliques múltiplos",
    ],
    a11y: [
      "Fornecer aria-label quando o texto não descreve a ação",
      "Manter contraste adequado entre texto e fundo",
    ],
    edgeCases: [
      "Estado disabled + loading para evitar cliques",
      "Texto longo deve truncar ou quebrar linha",
    ],
  },
  variants: [
    {
      id: "button-default",
      name: "Default",
      render: () => <Button>Primário</Button>,
    },
    {
      id: "button-secondary",
      name: "Secondary",
      render: () => <Button variant="secondary">Secundário</Button>,
    },
    {
      id: "button-loading",
      name: "Loading",
      description: "Desabilita cliques e exibe spinner.",
      render: () => <Button isLoading>Carregando</Button>,
    },
    {
      id: "button-danger",
      name: "Danger",
      render: () => <Button variant="danger">Excluir</Button>,
    },
    {
      id: "button-link",
      name: "Link",
      render: () => <Button variant="link">Saiba mais</Button>,
    },
  ],
};

export default ButtonStory;
