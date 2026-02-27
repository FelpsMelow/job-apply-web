"use client";

import { ReactNode, useState } from "react";
import { TaskDTO } from "../dtos/task.dto";
import { TaskContext } from "../contexts/task.context";

export function TaskProvider({ children }: { children: ReactNode }) {
    const [tasks, setTasks] = useState<TaskDTO[]>([]);

    const setTasksState = (newTasks: TaskDTO[]) => {
        setTasks([...newTasks]);
    };

    const updateTask = (id: string, updatedData: Partial<TaskDTO>) => {
        setTasks((prev) =>
            prev.map((task) =>
                task._id === id ? { ...task, ...updatedData } : task
            )
        );
    };

    return (
        <TaskContext.Provider value={{ tasks, setTasksState, updateTask }}>
            {children}
        </TaskContext.Provider>
    );
}
