import { useState, useEffect } from "react";

export function usePersistedState<T>(key: string, initialValue: T) {
    const [state, setState] = useState<T>(() => {
        try {
            const storedValue = localStorage.getItem(key);
            return storedValue ? JSON.parse(storedValue) : initialValue;
        } catch (error) {
            console.error(`❌ Erro ao recuperar ${key} do localStorage`, error);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(state));
        } catch (error) {
            console.error(`❌ Erro ao salvar ${key} no localStorage`, error);
        }
    }, [state, key]);

    return [state, setState] as const;
}
