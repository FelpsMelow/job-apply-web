// app/contexts/filterOptions.context.ts
import { createContext, useContext } from "react";
import { FilterOptionsContext } from "../types/filterOptions.type";

export const filterOptionsContext = createContext<FilterOptionsContext | undefined>(undefined);

export function useFilterOptions() {
    const context = useContext(filterOptionsContext);
    if (!context) {
        throw new Error("useFilterOptions deve ser usado dentro de um <FilterOptionsProvider />");
    }
    return context;
}
