import { SideBarOptions } from "../types/sideBarOptions.type";

export function getTowerIdByName(options: SideBarOptions, towerName: string): string | null {
    for (const company of options.constructionCompanies) {
        for (const project of company.projects) {
            for (const tower of project.towers) {
                if (tower.name.toLowerCase() === towerName.toLowerCase()) {
                    return tower.id;
                }
            }
        }
    }
    return null;
}