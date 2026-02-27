// TODO - Reamalizar essa função. estou recebendo as datas em outros formatos
export function isAfterMonthYear(dataCronograma: string, filteredMonthYear: string): boolean {
    const [filteredMonth, filteredYear] = filteredMonthYear.split('/').map(Number);
    const [cronogramaYear, cronogramaMonth] = dataCronograma.split('-').map(Number);

    if (cronogramaYear > filteredYear) return true;
    if (cronogramaYear === filteredYear && cronogramaMonth > filteredMonth) return true;

    return false;
}