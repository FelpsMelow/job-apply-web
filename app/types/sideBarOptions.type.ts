export interface SideBarOptions {
    constructionCompanies: Array<{
        name: string;
        id: string;
        projects: Array<{
            name: string;
            id: string;
            towers: Array<{
                name: string;
                id: string;
            }>;
        }>;
    }>;
}

export interface SideBarSelectedOption {
    constructionCompanies: string;
    construction: string;
    tower: string;
}

export interface SideBarContextType {
    sideBarOptions: SideBarOptions;
    sideBarSelectedOptions: SideBarSelectedOption;
    setSideBarSelectedOptions: (
        value: SideBarSelectedOption | ((prev: SideBarSelectedOption) => SideBarSelectedOption)
    ) => void;
    setSideBarOptions: (
        value: SideBarOptions | ((prev: SideBarOptions) => SideBarOptions)
    ) => void;
    isCollapsed: boolean;
    setIsCollapsed: (value: boolean | ((prev: boolean) => boolean)) => void;
}
