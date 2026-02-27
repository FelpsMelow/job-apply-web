import { api } from "./api.main";
import { GetConstructionCompaniesByIdsResponse } from "./types/builder.types";

export const getConstructionCompaniesByIds = async (
  ids: string[],
): Promise<GetConstructionCompaniesByIdsResponse> => {
  const response = await api.post<GetConstructionCompaniesByIdsResponse>(
    "/projects/find-many",
    { ids: ids },
  );
  return response.data;
};
