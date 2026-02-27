"use client";

import { createContext, useContext } from "react";
import { TaskDTO } from "../dtos/task.dto";

interface TaskContextType {
    tasks: TaskDTO[];
    setTasksState: (tasks: TaskDTO[]) => void;
    updateTask: (id: string, updatedData: Partial<TaskDTO>) => void;
}

export const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function useTask() {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error("useTask deve ser usado dentro de um <TaskProvider />");
    }
    return context;
}
