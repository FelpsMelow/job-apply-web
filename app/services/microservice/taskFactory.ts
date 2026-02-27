import { TaskDTO } from "@/app/dtos/task.dto";
import { IngestFileData } from "./types/ingestFile.types";
import { ingestApi } from "./api.ingest";

export const postTaskFactory = async (
    listFromFile: IngestFileData [],
): Promise<TaskDTO []> => {
    const response = await ingestApi.post<TaskDTO []>(
        "/ingest/task-factory",
        {
            data: listFromFile
        },
    );
    return response.data;
};