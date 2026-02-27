"use client";

import React, { useMemo } from "react";
import clsx from "clsx";
import "./table-external-users-pagination.scss";

type PageItem = number | "ellipsis";

interface PaginationProps {
    totalItems: number;
    page: number; // 1-based
    pageSize: number;
    pageSizeOptions?: number[];
    onPageChange: (page: number) => void;
    onPageSizeChange: (pageSize: number) => void;

    className?: string;
    siblingCount?: number; // quantos vizinhos ao redor da página atual
}

function clamp(n: number, min: number, max: number) {
    return Math.max(min, Math.min(max, n));
}

function buildPageItems(totalPages: number, currentPage: number, siblingCount: number): PageItem[] {
    if (totalPages <= 1) return [1];

    const first = 1;
    const last = totalPages;

    const left = Math.max(currentPage - siblingCount, first);
    const right = Math.min(currentPage + siblingCount, last);

    const showLeftEllipsis = left > first + 1;
    const showRightEllipsis = right < last - 1;

    const items: PageItem[] = [];

    items.push(first);

    if (showLeftEllipsis) items.push("ellipsis");
        else {
        for (let p = first + 1; p < left; p++) items.push(p);
    }

    for (let p = left; p <= right; p++) {
        if (p !== first && p !== last) items.push(p);
    }

    if (showRightEllipsis) items.push("ellipsis");
        else {
        for (let p = right + 1; p < last; p++) items.push(p);
    }

    if (last !== first) items.push(last);

    // remove duplicados (casos pequenos)
    return items.filter((v, i, arr) => arr.indexOf(v) === i);
}

export default function Pagination({
    totalItems,
    page,
    pageSize,
    pageSizeOptions = [10, 25, 50, 100],
    onPageChange,
    onPageSizeChange,
    className,
    siblingCount = 1,
}: PaginationProps) {
    const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

    const safePage = clamp(page, 1, totalPages);

    const { start, end } = useMemo(() => {
        if (totalItems === 0) return { start: 0, end: 0 };
        const startIdx = (safePage - 1) * pageSize + 1;
        const endIdx = Math.min(safePage * pageSize, totalItems);
        return { start: startIdx, end: endIdx };
    }, [safePage, pageSize, totalItems]);

    const pageItems = useMemo(
        () => buildPageItems(totalPages, safePage, siblingCount),
        [totalPages, safePage, siblingCount]
    );

    const canPrev = safePage > 1;
    const canNext = safePage < totalPages;

    function goTo(p: number) {
        onPageChange(clamp(p, 1, totalPages));
    }

    function handlePageSizeChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const nextSize = Number(e.target.value);
        // opcional: volta pra página 1 ao trocar pageSize (padrão mais comum)
        onPageSizeChange(nextSize);
        onPageChange(1);
    }

    return (
        <div className={clsx("pagination", className)}>
            <div className="pagination__left">
                <span className="pagination__text">
                    Mostrando <strong>{start}</strong> até <strong>{end}</strong> de{" "}
                    <strong>{totalItems}</strong> resultados
                </span>

                <div className="pagination__pageSize">
                    <span className="pagination__pageSizeLabel">por página</span>
                    <select value={pageSize} onChange={handlePageSizeChange} className="pagination__select">
                        {pageSizeOptions.map((opt) => (
                            <option key={opt} value={opt}>
                                {opt}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="pagination__right" role="navigation" aria-label="Paginação">
                <button
                    type="button"
                    className="pagination__btn"
                    onClick={() => goTo(safePage - 1)}
                    disabled={!canPrev}
                    aria-label="Página anterior"
                >
                    ‹
                </button>

                {pageItems.map((item, idx) =>
                    item === "ellipsis" ? (
                        <span key={`e-${idx}`} className="pagination__ellipsis">
                            …
                        </span>
                    ) : (
                    <button
                        key={item}
                        type="button"
                        className={clsx("pagination__page", item === safePage && "is-active")}
                        onClick={() => goTo(item)}
                        aria-current={item === safePage ? "page" : undefined}
                    >
                        {item}
                    </button>
                    )
                )}

                <button
                    type="button"
                    className="pagination__btn"
                    onClick={() => goTo(safePage + 1)}
                    disabled={!canNext}
                    aria-label="Próxima página"
                >
                    ›
                </button>
            </div>
        </div>
    );
}
