"use client";

import Input from "@/app/components/atoms/input/Input";
import { PlaygroundStory } from "../../types";

const InputStory: PlaygroundStory = {
  id: "atoms-input",
  title: "Atoms/Input",
  componentName: "Input",
  componentPath: "@/app/components/atoms/input/Input.tsx",
  description: "Campo de texto com suporte a label, erro e desabilitado.",
  usage: {
    whenToUse: [
      "Formulários simples e filtros rápidos",
      "Exibir feedback inline de validação",
    ],
    avoidWhen: [
      "Inputs complexos como máscara avançada",
      "Áreas de texto multi-linha (usar textarea)",
    ],
    rules: [
      "Sempre fornecer label para contexto",
      "Usar error para exibir mensagens curtas",
    ],
    a11y: [
      "Associar label visível ou aria-label",
      "Indicar estado disabled quando não editável",
    ],
    edgeCases: [
      "Placeholders não substituem label",
      "Mensagens longas podem quebrar layout",
    ],
  },
  variants: [
    {
      id: "input-default",
      name: "Default",
      render: () => <Input label="Email" placeholder="email@exemplo.com" />,
    },
    {
      id: "input-error",
      name: "Com erro",
      render: () => <Input label="Senha" type="password" error="Senha inválida" />,
    },
    {
      id: "input-disabled",
      name: "Desabilitado",
      render: () => <Input label="Código" value="12345" disabled />,
    },
  ],
};

export default InputStory;
