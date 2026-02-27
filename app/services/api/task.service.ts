import { TaskDTO } from "@/app/dtos/task.dto";
import { api } from "./api.main";
import {
  GetTasksByTowerIdResponse,
  PatchTasksByTaskIdBody,
  PatchTasksByTaskIdResponse,
} from "./types/task.types";

export const getTasksByTowerId = async (
  towerId: string,
): Promise<GetTasksByTowerIdResponse> => {
  const response = await api.post<GetTasksByTowerIdResponse>(
    "/tasks/find-by-tower",
    {
      towerId: towerId,
    },
  );
  return response.data;
};

// TODO - fazer uma requisição dinamica para tratar esse caso. (após eu finalizar a minha tarefa)
// "completionDate": null,
// "done": false,

export const patchTaskByTaskId = async (
  taskId: string,
  completionPercentage: number,
  data: PatchTasksByTaskIdBody,
): Promise<PatchTasksByTaskIdResponse> => {
  const response = await api.patch<PatchTasksByTaskIdResponse>(
    `/tasks/${taskId}`,
    {
      stages: data,
      completionPercentage: completionPercentage,
    },
  );
  return response.data;
};

// TODO - Melhorar a tipagem dessa requisição
export const postManyTasks = async (tasks: TaskDTO[]) => {
  const response = await api.post("/tasks/create-many", tasks);
  return response;
};

export const deleteTasksByProjectId = async (projectId: string) => {
  const response = await api.delete(`/tasks/by-project/${projectId}`);
  return response.data as { deletedCount: number };
};
