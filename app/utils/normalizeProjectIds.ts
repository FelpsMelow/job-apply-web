import { ProjectDTO } from "@/app/dtos/externalUser.dto";

export function normalizeProjectIds(projectsIds: string[], projects: ProjectDTO[]): ProjectDTO[] {
    if (!projects) return [];

    return projects.filter((p) => projectsIds.includes(p.id));
}
