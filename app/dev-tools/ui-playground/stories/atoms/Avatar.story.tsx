"use client";

import Avatar from "@/app/components/atoms/avatar/Avatar";
import { PlaygroundStory } from "../../types";

const AvatarStory: PlaygroundStory = {
  id: "atoms-avatar",
  title: "Atoms/Avatar",
  componentName: "Avatar",
  componentPath: "@/app/components/atoms/avatar/Avatar.tsx",
  componentSource: `import Image from  'next/image'

interface AvatarProps {
    userImgUrl?: string;
    mode?: 'black' | 'white'
}

export default function Avatar({ userImgUrl, mode = 'black' }: AvatarProps) {

    const avatarIcon = mode == 'black' ? '/avatar-icon-24x24.svg' : '/avatar-icon-white-24x24.svg'

    return (
        <Image
            src={userImgUrl? userImgUrl: avatarIcon}
            alt='Imagem do usuário'
            width={24}
            height={24}
        />
    )
}
`,
  description: "Exibe a foto do usuário ou um ícone padrão em tamanhos fixos.",
  usage: {
    whenToUse: [
      "Mostrar identidade do usuário em headers e listas",
      "Fallback quando não há imagem disponível",
    ],
    avoidWhen: [
      "Exibir imagens grandes ou editáveis",
      "Quando o usuário não está autenticado",
    ],
    rules: [
      "Garantir proporção 1:1 nas imagens fornecidas",
      "Trocar o ícone conforme o tema (mode prop)",
    ],
    a11y: [
      "Usar alt descritivo para leitores de tela",
    ],
    edgeCases: [
      "URLs quebradas devem usar o fallback padrão",
      "Tema dark usa ícone claro (mode='white')",
    ],
  },
  variants: [
    {
      id: "avatar-default",
      name: "Default",
      render: () => <Avatar />,
      code: `<Avatar />`,
    },
    {
      id: "avatar-custom",
      name: "Com imagem remota",
      render: () => <Avatar userImgUrl="" />,
      code: `<Avatar userImgUrl="" />`,
    },
    {
      id: "avatar-white",
      name: "Modo branco",
      render: () => (
        <div style={{ padding: 8, background: "#0f172a", display: "inline-flex", borderRadius: 8 }}>
          <Avatar mode="white" />
        </div>
      ),
      code: `<div style={{ padding: 8, background: "#0f172a", display: "inline-flex", borderRadius: 8 }}>
  <Avatar mode="white" />
</div>`,
    },
  ],
};

export default AvatarStory;
