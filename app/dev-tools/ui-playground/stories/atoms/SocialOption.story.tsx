"use client";

import SocialOption from "@/app/components/atoms/socialOption/SocialOption";
import { PlaygroundStory } from "../../types";

const SocialOptionStory: PlaygroundStory = {
  id: "atoms-social-option",
  title: "Atoms/SocialOption",
  componentName: "SocialOption",
  componentPath: "@/app/components/atoms/socialOption/SocialOption.tsx",
  description: "Botão individual de autenticação social com ícone personalizado.",
  usage: {
    whenToUse: [
      "Oferecer provedores adicionais além dos padrões",
      "Compor grupos de login social manualmente",
    ],
    avoidWhen: [
      "Duplicar botões já presentes em SocialLoginButtons",
    ],
    rules: [
      "Definir aria-label coerente com o provedor",
      "Usar ícones oficiais quando possível",
    ],
    a11y: [
      "aria-label obrigatório descrevendo a ação",
    ],
    edgeCases: [
      "Cuidar com tamanhos de ícones muito grandes",
    ],
  },
  variants: [
    {
      id: "social-option-google",
      name: "Google",
      render: () => (
        <SocialOption iconSrc="/logo-google-icon-23x23.svg" alt="Google" />
      ),
    },
    {
      id: "social-option-apple",
      name: "Apple",
      render: () => (
        <SocialOption iconSrc="/logo-apple-icon-20x23.svg" alt="Apple" />
      ),
    },
  ],
};

export default SocialOptionStory;
