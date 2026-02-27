import { config } from "../../env-config";
import { createApiClient } from "../network/axios.factory";

export const ingestApi = createApiClient(config.ingestBaseUrl);
