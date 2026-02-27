import { ExternalUserDTO } from "@/app/dtos/externalUser.dto";
import { api } from "./api.main";
import { LoginResponse } from "./types/user.types";

type LoginRequest = {
  email: string;
  password: string;
};

export const userLogin = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await api.post("/auth/login", data);

  return {
    statusCode: response.status,
    message: response.data?.message || "OK",
    data: response.data?.data ?? response.data,
  };
};

export const getListExternalUsers = async (): Promise<ExternalUserDTO[]> => {
  const response = await api.get("/users");
  return response.data;
}

export const patchUpdateExternalUser = async (userId: string, data: Partial<ExternalUserDTO>): Promise<ExternalUserDTO> => {
  const response = await api.patch(`/users/${userId}`, data);
  return response.data;
}

export const delExternalUser = async (userId: string) => {
  const response = await api.delete(`/users/${userId}`);
  return response.request.status;
}

export const createExternalUser = async (payload: Partial<ExternalUserDTO & { password: string }>) => {
  const response = await api.post("/users", payload);
  return response.request.status;
}