// network/api.main.ts
import { config } from "../../env-config";
import { createApiClient } from "../network/axios.factory";

export const api = createApiClient(config.apiBaseUrl);
