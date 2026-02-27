// app/types/filterOptions.type.ts
export interface FilterOptions {
    month: string;
    status: boolean | undefined;
    environment: string;
    floorNumber: number;
}

export interface FilterOptionsContext extends FilterOptions {
    setFilteredOptions: (filterOptions: Partial<FilterOptions>) => void;
}
