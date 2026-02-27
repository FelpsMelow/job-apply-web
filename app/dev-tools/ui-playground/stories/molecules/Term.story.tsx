"use client";

"use client";

import Term from "@/app/components/molecules/term/Term";
import { PlaygroundStory } from "../../types";

function formatFutureDate(daysFromNow: number) {
  const d = new Date();
  d.setDate(d.getDate() + daysFromNow);
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

const TermStory: PlaygroundStory = {
  id: "molecules-term",
  title: "Molecules/Term",
  componentName: "Term",
  componentPath: "@/app/components/molecules/term/Term.tsx",
  description: "Exibe prazo programado com cor condicional ao vencimento.",
  usage: {
    whenToUse: [
      "Destacar prazos planejados de tarefas",
      "Alertar sobre vencimentos próximos ou atrasados",
    ],
    avoidWhen: [
      "Datas não relacionadas a SLA/prazo",
    ],
    rules: [
      "Passar dateSchedule em formato string ISO/Brasil aceito pelo componente",
      "Usar somente para leitura (campo é disabled)",
    ],
    a11y: [
      "Label estático 'Prazo' facilita leitura",
    ],
    edgeCases: [
      "Datas inválidas podem quebrar o cálculo de hasDatePassed",
    ],
  },
  variants: [
    {
      id: "term-on-track",
      name: "Dentro do prazo",
      render: () => <Term dateSchedule={formatFutureDate(180)} />,
    },
    {
      id: "term-near",
      name: "Perto do vencimento",
      render: () => <Term dateSchedule={formatFutureDate(5)} />,
    },
    {
      id: "term-late",
      name: "Atrasado",
      render: () => <Term dateSchedule={formatFutureDate(-10)} />,
    },
  ],
};

export default TermStory;
