import { api } from "./api.main";
import { ProjectResponse } from "./types/project.type";

export const getListProjects = async (): Promise<ProjectResponse> => {
    const response = await api.get("/projects");
    return response.data;
}