import { StagesDTO } from "@/app/dtos/task.dto";

export function updateStepsWithNewValue(
    stepId: string,
    steps: StagesDTO[],
    newValue: number
): StagesDTO[] {
    return steps.map((currentStep) => {
        if (currentStep._id === stepId) {
            return {
                ...currentStep,
                completionPercentage: newValue,
            };
        }
        return currentStep;
    });
}
