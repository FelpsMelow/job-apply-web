import axios from "axios";
import { clearSessionAndRedirect } from "@/app/utils/auth/logout.util";

export const createApiClient = (baseURL: string) => {
    const instance = axios.create({
        baseURL,
        timeout: 10000,
    });

    instance.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem("token");
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => Promise.reject(error)
    );

    instance.interceptors.response.use( (response) => response,(error) => {
        const status = error?.response?.status;
        const url = error?.config?.url || "";

        const isLoginRequest = url.includes("/auth/login");

        if (status === 401 && !isLoginRequest) {
            clearSessionAndRedirect();
        }

        return Promise.reject(error);
    });


    return instance;
};
