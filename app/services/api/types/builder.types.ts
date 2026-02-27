export interface GetConstructionCompaniesByIdsResponse {
    constructionCompanies: Array<{
        name: string;
        id: string;
        constructions: Array<{
            name: string;
            id: string;
            towers: Array<{
                name: string;
                id: string;
            }>;
        }>;
    }>;
}
