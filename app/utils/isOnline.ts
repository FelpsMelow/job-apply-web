import { pingExternalConnection } from "../services/network/connectionStatusService";

export async function isOnline(): Promise<boolean> {
    return await pingExternalConnection();
}