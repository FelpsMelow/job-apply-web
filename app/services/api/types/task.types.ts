import { TaskDTO } from "@/app/dtos/task.dto";

/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface GetTasksByTowerIdResponse extends Array<TaskDTO> {}
/* eslint-enable @typescript-eslint/no-empty-object-type */

/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface PatchTasksByTaskIdBody extends Array<Partial<Omit<TaskDTO, "_id">>> {}
/* eslint-enable @typescript-eslint/no-empty-object-type */

/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface PatchTasksByTaskIdResponse extends TaskDTO {}
/* eslint-enable @typescript-eslint/no-empty-object-type */