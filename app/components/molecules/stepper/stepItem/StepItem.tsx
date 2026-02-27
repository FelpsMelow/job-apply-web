import { StepButton } from "@/app/components/atoms/stepper/stepButton/StepButton";
import { StepDot, StepStatus } from "../../../atoms/stepper/stepDot/StepDot";
import styles from "./step-item.module.scss";
import { StepLabel } from "@/app/components/atoms/stepper/stepLabel/StepLabel";
import { StepConnector } from "@/app/components/atoms/stepper/stepConnector/StepConnector";


export type Step = {
    id: string;
    label: string;
    description?: string;
};

type StepItemProps = {
    step: Step;
    index: number;
    status: StepStatus;
    isCurrent: boolean;
    isLast: boolean;
    isClickable: boolean;
    connectorDone?: boolean;
    onSelect?: (index: number) => void;
};

export function StepItem({
    step,
    index,
    status,
    isCurrent,
    isLast,
    isClickable,
    connectorDone,
    onSelect,
}: StepItemProps) {
    return (
        <li className={styles["step-item"]}>
            <StepButton
                disabled={!isClickable}
                isCurrent={isCurrent}
                onClick={() => onSelect?.(index)}
            >
                <StepDot index={index} status={status} />
                <StepLabel label={step.label} status={status} />
            </StepButton>

            {!isLast && (
                <span className={styles["step-item__connector"]}>
                    <StepConnector done={connectorDone} />
                </span>
            )}
        </li>
    );
}
