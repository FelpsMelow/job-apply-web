import { StagesDTO } from "@/app/dtos/task.dto";

export function calculateCompletionPercentage(stages: StagesDTO[]): number {
    if (!stages || stages.length === 0) return 0;

    const validStages = stages.filter(s => s.weight > 0);

    if (validStages.length === 0) return 0;

    const totalWeight = validStages.reduce((sum, s) => sum + s.weight, 0);

    const weightedSum = validStages.reduce(
    (sum, s) => sum + s.weight * (s.completionPercentage || 0),
    0
    );

    // Duas casas decimais
    const result = weightedSum / totalWeight;
    return Math.round(result * 100) / 100;
}
