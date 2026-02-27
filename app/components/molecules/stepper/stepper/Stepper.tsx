import { StepStatus } from "@/app/components/atoms/stepper/stepDot/StepDot";
import { Step, StepItem } from "../stepItem/StepItem";
import styles from "./stepper.module.scss";

type StepperProps = {
    steps: Step[];
    activeStep: number;

    /** opcional: status explícito por step */
    status?: StepStatus[];

    /** trava avanço (pode clicar até onde já chegou) */
    maxStepReached?: number;

    /** se passado, habilita clique controlado */
    onStepChange?: (index: number) => void;
};

export function Stepper({
    steps,
    activeStep,
    status,
    maxStepReached = activeStep,
    onStepChange,
}: StepperProps) {
    function getStatus(i: number): StepStatus {
        if (status?.[i]) return status[i]!;
        if (i < activeStep) return "done";
        if (i === activeStep) return "active";
        return "pending";
    }

    return (
        <ol className={styles["stepper"]}>
            {steps.map((step, i) => {
                const st = getStatus(i);
                const isClickable = Boolean(onStepChange) && i <= maxStepReached;

                return (
                    <StepItem
                        key={step.id}
                        step={step}
                        index={i}
                        status={st}
                        isCurrent={i === activeStep}
                        isLast={i === steps.length - 1}
                        isClickable={isClickable}
                        connectorDone={i < activeStep}
                        onSelect={onStepChange}
                    />
                );
            })}
        </ol>
    );
}
