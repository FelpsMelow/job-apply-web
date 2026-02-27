export interface ProjectDTO {
    id: string;
    name: string;
    location: string;
    startDate: string;
    forecastCompletionDate: string;
    constructionCompanyId: string;
    photoUrl: string;
    createdAt: string;
    updatedAt: string;
}


export interface ExternalUserDTO {
    _id: string;
    name: string;
    email: string;
    profilePhoto: string;
    accessType: string;
    projects: Array<ProjectDTO> | any
    status: boolean;
    createdAt: string;
    updatedAt: string;
    lastLogin: string;
    __v: number;
}

