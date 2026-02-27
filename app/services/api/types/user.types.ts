export interface LoginResponse {
    statusCode: number;
    message: string;
    data?: {
        access_token: string;
        user: {
            id: string;
            name: string;
            email: string;
            accessType: "funcionario" | "admin";
            profilePhoto: string;
            status: boolean;
            projects: string[];
        };
    };
}
