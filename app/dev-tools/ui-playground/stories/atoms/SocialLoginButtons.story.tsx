"use client";

import SocialLoginButtons from "@/app/components/atoms/socialLoginButtons/SocialLoginButtons";
import { PlaygroundStory } from "../../types";

const SocialLoginButtonsStory: PlaygroundStory = {
  id: "atoms-social-login-buttons",
  title: "Atoms/SocialLoginButtons",
  componentName: "SocialLoginButtons",
  componentPath: "@/app/components/atoms/socialLoginButtons/SocialLoginButtons.tsx",
  description: "Botões para login social com Google e Apple.",
  usage: {
    whenToUse: [
      "Fluxos de autenticação com provedores externos",
    ],
    avoidWhen: [
      "Quando o app não oferece SSO",
    ],
    rules: [
      "Associar callbacks aos cliques quando disponíveis",
      "Manter proporção dos ícones originais",
    ],
    a11y: [
      "Cada botão já possui aria-label descritiva",
    ],
    edgeCases: [
      "Tratar falha de autenticação externa",
    ],
  },
  variants: [
    {
      id: "social-login-default",
      name: "Default",
      render: () => (
        <SocialLoginButtons
          onGoogleClick={() => console.log("Google login")}
          onAppleClick={() => console.log("Apple login")}
        />
      ),
    },
  ],
};

export default SocialLoginButtonsStory;
