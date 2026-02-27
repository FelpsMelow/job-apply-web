"use client";

import Select from "@/app/components/atoms/select/Select";
import { PlaygroundStory } from "../../types";

const options = [
  { label: "Opção A", value: "A" },
  { label: "Opção B", value: "B" },
  { label: "Opção C", value: "C" },
];

const SelectStory: PlaygroundStory = {
  id: "atoms-select",
  title: "Atoms/Select",
  componentName: "Select",
  componentPath: "@/app/components/atoms/select/Select.tsx",
  description: "Campo de seleção simples com variantes de estilo e tamanhos.",
  usage: {
    whenToUse: [
      "Listas curtas de opções conhecidas",
      "Filtros rápidos em formulários",
    ],
    avoidWhen: [
      "Listas longas (usar autocomplete)",
      "Seleção múltipla (não suportado aqui)",
    ],
    rules: [
      "Definir variant conforme hierarquia da ação",
      "Ajustar sizeSelect ao espaço disponível",
    ],
    a11y: [
      "Fornecer label ou aria-label",
    ],
    edgeCases: [
      "Valores booleanos devem ser convertidos para string",
    ],
  },
  variants: [
    {
      id: "select-primary",
      name: "Primary",
      render: () => <Select options={options} />,
    },
    {
      id: "select-secondary",
      name: "Secondary",
      render: () => <Select options={options} variant="secondary" />,
    },
    {
      id: "select-link",
      name: "Link",
      render: () => <Select options={options} variant="link" sizeSelect="sm" />,
    },
    {
      id: "select-disabled",
      name: "Desabilitado",
      render: () => <Select options={options} disabled />,
    },
  ],
};

export default SelectStory;
