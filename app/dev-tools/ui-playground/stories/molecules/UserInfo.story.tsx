"use client";

import UserInfo from "@/app/components/molecules/userInfo/UserInfo";
import { PlaygroundStory } from "../../types";

const UserInfoStory: PlaygroundStory = {
  id: "molecules-user-info",
  title: "Molecules/UserInfo",
  componentName: "UserInfo",
  componentPath: "@/app/components/molecules/userInfo/UserInfo.tsx",
  description: "Bloco compacto com avatar e nome do usuário.",
  usage: {
    whenToUse: [
      "Headers, sidebars ou cartões que exibem perfil",
      "Listas de usuários com espaço reduzido",
    ],
    avoidWhen: [
      "Perfis com muitos metadados (usar card dedicado)",
    ],
    rules: [
      "Fornecer userName curto para evitar truncamento",
      "Passar userImgUrl quando disponível; fallback usa ícone",
    ],
    a11y: [
      "Avatar contém alt com descrição",
    ],
    edgeCases: [
      "Nomes longos serão truncados",
    ],
  },
  variants: [
    {
      id: "user-info-default",
      name: "Default",
      render: () => <UserInfo userName="Ana Silva" />,
    },
    {
      id: "user-info-custom-img",
      name: "Com imagem",
      render: () => (
        <UserInfo
          userName="Carlos Alberto"
          userImgUrl=""
        />
      ),
    },
    {
      id: "user-info-long-name",
      name: "Nome longo",
      render: () => (
        <div style={{ width: 160 }}>
          <UserInfo userName="Alexandra de Souza Martins" />
        </div>
      ),
    },
  ],
};

export default UserInfoStory;
