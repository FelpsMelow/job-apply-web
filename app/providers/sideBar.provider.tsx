"use client";

import { ReactNode } from "react";
import { SideBarContext } from "../contexts/sideBar.context";
import {
    SideBarOptions,
    SideBarSelectedOption,
    SideBarContextType,
} from "../types/sideBarOptions.type";
import { usePersistedState } from "@/app/hooks/usePersistedState";

export function SideBarProvider({ children }: { children: ReactNode }) {
    const [sideBarSelectedOptions, setSideBarSelectedOptionsState] =
    usePersistedState<SideBarSelectedOption>("sideBarSelectedOptions", {
        constructionCompanies: "",
        construction: "",
        tower: "",
    });

    const [sideBarOptions, setSideBarOptionsState] = usePersistedState<SideBarOptions>(
        "sideBarOptions",
        { constructionCompanies: [] }
    );

    const [isCollapsed, setIsCollapsed] = usePersistedState<boolean>(
        "sideBarIsCollapsed",
        false
    );

    const value: SideBarContextType = {
        sideBarOptions,
        sideBarSelectedOptions,
        isCollapsed,
        setSideBarOptions: (value) =>
            setSideBarOptionsState((prev) =>
                typeof value === "function" ? value(prev) : { ...value }
            ),
        setSideBarSelectedOptions: (value) =>
            setSideBarSelectedOptionsState((prev) =>
                typeof value === "function" ? value(prev) : { ...value }
            ),
        setIsCollapsed: (value) =>
            setIsCollapsed((prev) =>
                typeof value === "function" ? value(prev) : value
            ),
    };

    return <SideBarContext.Provider value={value}>{children}</SideBarContext.Provider>;
}
