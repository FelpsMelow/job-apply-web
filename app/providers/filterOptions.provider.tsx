"use client";

import { ReactNode, useState } from "react";
import { FilterOptions } from "../types/filterOptions.type";
import { filterOptionsContext } from "../contexts/filter.context";

export function FilterOptionsProvider({ children }: { children: ReactNode }) {
    const [filterOptions, setFilterOptions] = useState<FilterOptions>({
        month: "",
        status: undefined,
        environment: "",
        floorNumber: 0
    });

    const setFilteredOptions = (options: Partial<FilterOptions>) => {
        setFilterOptions((prev) => ({ ...prev, ...options }));
    };

    return (
        <filterOptionsContext.Provider value={{ ...filterOptions, setFilteredOptions }}>
            {children}
        </filterOptionsContext.Provider>
    );
}
