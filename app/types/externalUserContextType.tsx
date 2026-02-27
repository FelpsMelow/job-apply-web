import { ExternalUserDTO } from "../dtos/externalUser.dto";

export interface ExternalUserContextType {
    externalUsers: Array<ExternalUserDTO>;
    setExternalUsersState: (newExternalUsers: Array<ExternalUserDTO>) => void;
    updateExternalUser: (externalUserId: string, updatedData: Partial<ExternalUserDTO>) => void;
    deleteExternalUser: (userId: string) => void;
}

