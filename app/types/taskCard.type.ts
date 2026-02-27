import { StagesDTO } from "../dtos/task.dto";

export interface StepProps {
    stepName: string;
    percentageStepProgress: number;
    weight: number;
    isOutOfMonth: boolean;
    onClick: () => void;
}

export interface TaskStepsProps {
    taskId: string;
    steps: StagesDTO[];
    isCollapsed: boolean;
}