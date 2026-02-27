/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export type BatchProgress = {
    batchIndex: number;          // 0-based
    batchNumber: number;         // 1-based
    totalBatches: number;
    batchSize: number;
    start: number;
    end: number;                 // exclusive
    itemsInBatch: number;
    sentItemsSoFar: number;      // items attempted so far
    okBatches: number;
    failedBatches: number;
};

export type BatchResult<TResponse = unknown> = {
    batchNumber: number;         // 1-based
    itemsInBatch: number;
    start: number;
    end: number;                 // exclusive
    ok: boolean;
    status?: number;
    statusText?: string;
    response?: TResponse;
    errorMessage?: string;
    errorDetails?: unknown;
};

export type SendBatchesSummary<TResponse = unknown> = {
    totalItems: number;
    batchSize: number;
    totalBatches: number;

    okItems: number;
    failedItems: number;

    okBatches: number;
    failedBatches: number;

    results: BatchResult<TResponse>[];
};

type SendBatchesArgs<TItem, TMapped, TResponse> = {
    items: TItem[];
    batchSize?: number; // default 50
    delayMsBetweenBatches?: number; // default 0
    mapItem?: (item: TItem) => TMapped; // default identity
    request: (mappedBatch: TMapped[], batchInfo: { batchNumber: number; start: number; end: number }) => Promise<{
        status: number;
        statusText?: string;
        data: TResponse;
    }>;
    onProgress?: (p: BatchProgress) => void; // runtime progress callback
};

/**
 * Envia itens em lotes e reporta progresso em tempo de execução.
 * Retorna resumo com quantos batches deram OK / falharam.
 */
export async function sendInBatches<TItem, TMapped = TItem, TResponse = unknown>(
    args: SendBatchesArgs<TItem, TMapped, TResponse>
): Promise<SendBatchesSummary<TResponse>> {
    const {
        items,
        batchSize = 50,
        delayMsBetweenBatches = 0,
        mapItem = ((x: any) => x) as (item: TItem) => TMapped,
        request,
        onProgress,
    } = args;

    const totalItems = items.length;
    const totalBatches = Math.ceil(totalItems / batchSize);

    let okItems = 0;
    let failedItems = 0;
    let okBatches = 0;
    let failedBatches = 0;

    const results: BatchResult<TResponse>[] = [];

    for (let batchIndex = 0; batchIndex < totalBatches; batchIndex++) {
        const start = batchIndex * batchSize;
        const end = Math.min(start + batchSize, totalItems);
        const rawBatch = items.slice(start, end);
        const mappedBatch = rawBatch.map(mapItem);

        onProgress?.({
            batchIndex,
            batchNumber: batchIndex + 1,
            totalBatches,
            batchSize,
            start,
            end,
            itemsInBatch: rawBatch.length,
            sentItemsSoFar: end,
            okBatches,
            failedBatches,
        });

        try {
            const res = await request(mappedBatch, { batchNumber: batchIndex + 1, start, end });

            const ok = res.status === 200 || res.status === 201;
            results.push({
                batchNumber: batchIndex + 1,
                itemsInBatch: rawBatch.length,
                start,
                end,
                ok,
                status: res.status,
                statusText: res.statusText,
                response: res.data,
            });

            if (ok) {
                okBatches += 1;
                okItems += rawBatch.length;
            } else {
                failedBatches += 1;
                failedItems += rawBatch.length;
            }
        } catch (err) {
            const axiosErr = axios.isAxiosError(err);
            const errorMessage = axiosErr
            ? (err.response?.data as any)?.message || err.message
            : "Erro desconhecido";
            const errorDetails = axiosErr ? err.response?.data : undefined;

            results.push({
                batchNumber: batchIndex + 1,
                itemsInBatch: rawBatch.length,
                start,
                end,
                ok: false,
                status: axiosErr ? err.response?.status : undefined,
                statusText: axiosErr ? err.response?.statusText : undefined,
                errorMessage,
                errorDetails,
            });

            failedBatches += 1;
            failedItems += rawBatch.length;
        }

        if (delayMsBetweenBatches > 0 && batchIndex < totalBatches - 1) {
            await new Promise((r) => setTimeout(r, delayMsBetweenBatches));
        }
    }

  return {
    totalItems,
    batchSize,
    totalBatches,
    okItems,
    failedItems,
    okBatches,
    failedBatches,
    results,
  };
}
