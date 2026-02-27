"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { userLogin } from "@/app/services/api/user.service";
import LoginTemplate from "../../templates/login/LoginTemplate";
import { useUser } from "@/app/contexts/user.context";
import { useAuth } from "@/app/contexts/authContext";
import { Alert } from "../../organisms/alerts/Alerts";
import "./page-login.scss";

export default function PageLogin() {
  const [isLoginError, setIsLoginError] = useState(false);
  const router = useRouter();
  const { setUser } = useUser();
  const { setToken } = useAuth();

  const handleLogin = async ({ email, password }: { email: string; password: string }) => {
    try {
      setIsLoginError(false);

      const res = await userLogin({ email, password }); 

      if (res.statusCode !== 201 || !res.data?.access_token || !res.data?.user) {
        setIsLoginError(true);

        Alert({
          type: "error",
          message: res.message || "Não foi possível fazer login.",
        });

        return;
      }

      localStorage.setItem("token", res.data.access_token);
      setToken(res.data.access_token);

      const fullUser = {
        userId: res.data.user.id,
        nome: res.data.user.name,
        email: res.data.user.email,
        fotoPerfil: res.data.user.profilePhoto,
        tipoDeAcesso: res.data.user.accessType,
        obras: res.data.user.projects,
        status: res.data.user.status,
        isAuthenticated: true,
      };

      setUser(fullUser);

      Alert({
        type: "success",
        message: "Login realizado com sucesso.",
      });

      router.push("/");
    } catch (error: any) {
      const statusCode = error?.response?.data?.statusCode ?? error?.response?.status;
      const message = error?.response?.data?.message;

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
