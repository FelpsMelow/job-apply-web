import { StagesDTO } from "@/app/dtos/task.dto";

export function sortStepsByDateAsc(steps: StagesDTO[]): StagesDTO[] {
    return [...steps].sort((a, b) => {
        const dateA = new Date(a.scheduleDate).getTime();
        const dateB = new Date(b.scheduleDate).getTime();
        return dateA - dateB;
    });
}
