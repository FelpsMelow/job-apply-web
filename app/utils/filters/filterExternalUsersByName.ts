import { ExternalUserDTO } from "@/app/dtos/externalUser.dto";

function normalize(text: string) {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
    }

    export function filterExternalUsersByName( externalUsers: ExternalUserDTO[], searchTerm: string ): ExternalUserDTO[] {
    
        if (!searchTerm.trim()) return externalUsers;

    const normalizedSearch = normalize(searchTerm);

    return externalUsers.filter((user) => normalize(user.name).includes(normalizedSearch));
}
