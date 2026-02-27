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
