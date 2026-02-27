import { TaskDTO } from "@/app/dtos/task.dto";

interface TaskFilters {
    month?: string | number;
    done?: boolean;
    sector?: string;
    floorNumber?: number;
}

export function filterTasks(tasks: TaskDTO[], filters: TaskFilters): TaskDTO[] {
    let { month, sector } = filters;
    const { done, floorNumber } = filters;


    // 🔹 Ignora valores padrão vindos do Select
    if (month === "Mês") month = undefined;
    if (sector === "Ambiente") sector = undefined;

    // 🔹 Converte o mês para número (caso venha como string "01", "02" etc.)
    const numericMonth =
        typeof month === "string" ? Number(month) || undefined : month;

    return tasks.filter(
        ({
            scheduleDate,
            done: taskDone,
            sector: taskSector,
            floorNumber: taskFloorNumber,
        }) => {
            const date = new Date(scheduleDate);
            if (isNaN(date.getTime())) return false;

            const matchesMonth = numericMonth
                ? date.getUTCMonth() + 1 === numericMonth
                : true;

            const matchesDone =
                done !== undefined ? taskDone === done : true;

            const matchesSector = sector
                ? taskSector?.trim().toLowerCase() === sector.trim().toLowerCase()
                : true;

            const matchesFloorNumber =
                floorNumber !== null && floorNumber !== undefined
                    ? taskFloorNumber === floorNumber
                    : true;

            return (
                matchesMonth &&
                matchesDone &&
                matchesSector &&
                matchesFloorNumber
            );
        }
    );
}
