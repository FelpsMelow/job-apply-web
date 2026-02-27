"use client"

import { ReactNode, useState } from "react";
import { ExternalUserContext } from "../contexts/externalUserContext";
import { ExternalUserDTO } from "../dtos/externalUser.dto";

export function ExternalUserProvider ({children}: { children: ReactNode}) {

    const [externalUsers, setExternalUsers] = useState<ExternalUserDTO[]>([])

    function setExternalUsersState (newExternalUsers: ExternalUserDTO[]) {
        setExternalUsers([...newExternalUsers])
    }

    function updateExternalUser (externalUserId: string, updatedData: Partial<ExternalUserDTO>) {
        setExternalUsers((prev) => 
            prev.map((externalUser) =>
                externalUser._id === externalUserId ? { ...externalUser, ...updatedData } : externalUser
            )
        )
    }

    function deleteExternalUser (userId: string) {
        setExternalUsers((prev) => prev.filter((user) => user._id !== userId));
    }

    return (
        <ExternalUserContext.Provider value={{ externalUsers, setExternalUsersState, updateExternalUser, deleteExternalUser }}>
            {children}
        </ExternalUserContext.Provider>
    )
}