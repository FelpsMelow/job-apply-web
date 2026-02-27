interface IngestFileMeta {
    totalRows: number
    validRows: number
    invalidRows: number
}

export interface IngestFileData {
    ordem: number;
    cliente: string;
    obra: string;
    mes_planejado: string;
    tarefa: string;
    etapa: string;
    peso: number;
    medido?: number;
    torre: string;
    pavimento: number;
    ambiente: string
}

export interface IngestFileResponse {
    ok: string;
    meta: IngestFileMeta
    data: Array<IngestFileData>
}
