import { ingestApi } from "./api.ingest";
import { IngestFileResponse } from "./types/ingestFile.types";

export const ingestFile = async (file: File): Promise<IngestFileResponse> => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await ingestApi.post<IngestFileResponse>("/ingest/excel", formData);

    console.table(response.data.data);

    return response.data;
};
