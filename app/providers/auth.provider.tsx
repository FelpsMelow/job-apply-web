"use client";

import { useEffect, useState } from "react";
import { AuthContext } from "../contexts/authContext";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [token, setToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        if (savedToken) setToken(savedToken);
        setIsLoading(false);
    }, []);

    return (
        <AuthContext.Provider value={{ token, setToken, isLoading }}>
            {!isLoading && children}
        </AuthContext.Provider>
    );
};
