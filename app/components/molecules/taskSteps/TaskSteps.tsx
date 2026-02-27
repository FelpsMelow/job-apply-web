import { Fragment, useMemo, useState } from "react";
import { TaskStepsProps } from "@/app/types/taskCard.type";
import clsx from "clsx";
import Step from "../step/Step";
import Divider from "../../atoms/divider/Divider";
import { isAfterMonthYear } from "@/app/utils/date/isAfterMonthYear";
import { sortStepsByDateAsc } from "@/app/utils/sortStepsByDateDesc";
import MeasureStageModal from "../../organisms/measureStageModal/MeasureStageModal";
import { StagesDTO } from "@/app/dtos/task.dto";
import { formatISOToBRDate } from '../../../utils/date/formatISOToBRDate';
import "./task-steps.scss";

export default function TaskSteps({ taskId, steps, isCollapsed }: TaskStepsProps) {
  const classes = clsx(
    "steps-container",
    `${isCollapsed && "steps-container-colapsed"}`
  );

  const orderedSteps = useMemo(() => sortStepsByDateAsc(steps), [steps]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStep, setSelectedStep] = useState<StagesDTO | null>(null);

  // TODO - Criar filtro de ano e concatenar com o filtro do mês
  const filteredMonthYear = "08/2025";

  return (
    <section className={classes}>
      {orderedSteps.map((step) => {
        const isOutOfMonth = isAfterMonthYear(
          formatISOToBRDate(step.scheduleDate),
          filteredMonthYear
        );

        return (
          <Fragment key={step._id}>
            <Step
              stepName={step.name}
              percentageStepProgress={Math.round(step.completionPercentage)}
              weight={Math.round(step.weight)}
              isOutOfMonth={isOutOfMonth}
              onClick={() => {
                setSelectedStep(step);
                setIsModalOpen(true);
              }}
            />
            <Divider orientation="horizontal" />
          </Fragment>
        );
      })}
      {selectedStep && (
        <MeasureStageModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          taskId={taskId}
          step={selectedStep}
          steps={steps}
        />
      )}
    </section>
  );
}
