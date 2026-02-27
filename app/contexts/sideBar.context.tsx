import { createContext, useContext } from "react";
import { SideBarContextType } from "../types/sideBarOptions.type";

export const SideBarContext = createContext<SideBarContextType | undefined>(undefined);

export function useSideBar() {
    const context = useContext(SideBarContext);
    if (!context) {
        throw new Error("useSideBar deve ser usado dentro de um SideBarProvider.");
    }
    return context;
}
