"use client";

import { useState } from "react";
import Modal from "@/app/components/molecules/modal/Modal";
import Button from "@/app/components/atoms/button/Button";
import Text from "@/app/components/atoms/text/Text";
import { PlaygroundStory } from "../../types";

const ModalDefault = () => {
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Abrir modal</Button>
      <Modal
        title="Fundação"
        isOpen={open}
        isDesabled={false}
        isLoading={loading}
        onClose={() => setOpen(false)}
        onSave={() => {
          setLoading(true);
          setTimeout(() => setLoading(false), 800);
        }}
      >
        <Text as="p">Confirme a medição desta etapa.</Text>
      </Modal>
    </>
  );
};

const ModalStory: PlaygroundStory = {
  id: "molecules-modal",
  title: "Molecules/Modal",
  componentName: "Modal",
  componentPath: "@/app/components/molecules/modal/Modal.tsx",
  description: "Diálogo com título, conteúdo customizável e ações primárias/secundárias.",
  usage: {
    whenToUse: [
      "Confirmações rápidas e edição de pequenos formulários",
      "Fluxos que exigem bloqueio do conteúdo de fundo",
    ],
    avoidWhen: [
      "Formulários muito extensos (preferir página dedicada)",
    ],
    rules: [
      "Controlar abertura via isOpen e onClose",
      "Usar isLoading para feedback enquanto salva",
      "Desabilitar ações quando isDesabled=true",
    ],
    a11y: [
      "Foco deve ir para o modal ao abrir",
      "Fechamento pelo overlay só se closeOnOverlayClick estiver habilitado",
    ],
    edgeCases: [
      "Conteúdo alto deve rolar dentro do modal",
    ],
  },
  variants: [
    {
      id: "modal-default",
      name: "Aberto",
      render: () => <ModalDefault />,
    },
    {
      id: "modal-disabled",
      name: "Ação desabilitada",
      render: () => (
        <Modal
          title="Etapa finalizada"
          isOpen={true}
          isDesabled={true}
          isLoading={false}
          onClose={() => undefined}
          onSave={() => undefined}
        >
          <Text as="p">A etapa está concluída, não é possível medir novamente.</Text>
        </Modal>
      ),
    },
  ],
};

export default ModalStory;
