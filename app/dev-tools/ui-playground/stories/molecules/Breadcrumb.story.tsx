"use client";

import Breadcrumb from "@/app/components/molecules/breadcrumb/Breadcrumb";
import { PlaygroundStory } from "../../types";

const BreadcrumbStory: PlaygroundStory = {
  id: "molecules-breadcrumb",
  title: "Molecules/Breadcrumb",
  componentName: "Breadcrumb",
  componentPath: "@/app/components/molecules/breadcrumb/Breadcrumb.tsx",
  description: "Navegação hierárquica simples com separadores e clique opcional.",
  usage: {
    whenToUse: [
      "Exibir caminho atual em fluxos multi-página",
      "Permitir navegação incremental para níveis anteriores",
    ],
    avoidWhen: [
      "Estruturas profundas demais que poluem o header",
    ],
    rules: [
      "Fornecer paths em ordem da raiz até a página atual",
      "Tratar clique com onClick quando quiser navegação customizada",
    ],
    a11y: [
      "Usar rótulos claros; componente usa span, então mantenha contexto em volta",
    ],
    edgeCases: [
      "Paths longos podem quebrar; considerar truncar nomes",
    ],
  },
  variants: [
    {
      id: "breadcrumb-default",
      name: "Caminho curto",
      render: () => <Breadcrumb paths={["Home", "Projetos", "Tarefas"]} />,
    },
    {
      id: "breadcrumb-clickable",
      name: "Com callback",
      render: () => (
        <Breadcrumb
          paths={["Dashboard", "Clientes", "Obra 12", "Andamento"]}
          onClick={(index, path) => console.log(`Clique em ${index}: ${path}`)}
        />
      ),
    },
  ],
};

export default BreadcrumbStory;
