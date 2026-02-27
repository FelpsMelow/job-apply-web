"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { userLogin } from "@/app/services/api/user.service";
import LoginTemplate from "../../templates/login/LoginTemplate";
import { useAuth } from "@/app/contexts/authContext";
import { Alert } from "../../organisms/alerts/Alerts";
import "./page-login.scss";

interface LoginErrorResponse {
  response?: {
    status?: number;
    data?: {
      statusCode?: number;
      message?: string;
    };
  };
}

export default function PageLogin() {
  const [isLoginError, setIsLoginError] = useState(false);
  const router = useRouter();
  const { setToken } = useAuth();

  const handleLogin = async ({ email, password }: { email: string; password: string }) => {
    try {
      setIsLoginError(false);

      const res = await userLogin({ email, password });

      if (res.statusCode !== 201 || !res.data?.access_token) {
        setIsLoginError(true);

        Alert({
          type: "error",
          message: res.message || "Não foi possível fazer login.",
        });

        return;
      }

      localStorage.setItem("token", res.data.access_token);
      setToken(res.data.access_token);

      Alert({
        type: "success",
        message: "Login realizado com sucesso.",
      });

      router.push("/");
    } catch (error: unknown) {
      const parsedError = error as LoginErrorResponse;
      const statusCode = parsedError?.response?.data?.statusCode ?? parsedError?.response?.status;
      const message = parsedError?.response?.data?.message;

      if (statusCode === 401) {
        setIsLoginError(true);
        Alert({ type: "error", message: message || "Não autorizado." });
        return;
      }

      setIsLoginError(true);
      Alert({ type: "error", message: "Erro de conexão ou falha inesperada. Tente novamente." });
    }
  };

  return (
    <LoginTemplate
      onSubmit={(e) => handleLogin({ email: e.email, password: e.password })}
      isLoginError={isLoginError}
    />
  );
}
