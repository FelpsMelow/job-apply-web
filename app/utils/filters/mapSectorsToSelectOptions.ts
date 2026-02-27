import { TaskDTO } from "@/app/dtos/task.dto";

export function mapEnvironmentsToSelectOptions(tasks: TaskDTO[]) {
    const uniqueSectors = new Set(
        tasks.map(task => task.sector).filter(Boolean)
    );

    const mappedOptions = Array.from(uniqueSectors)
    .sort((a, b) => a.localeCompare(b))
    .map(sector => ({
        label: sector,
        value: sector
    }));

    return [{ label: "Ambiente", value: "Ambiente" }, ...mappedOptions];
}
