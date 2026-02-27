export function formatLastLogin(dateString: string): string {
    if (!dateString) return "-";

    const date = new Date(dateString);
    const now = new Date();

    // Ajuste automático para timezone local
    const localDate = new Date(date.getTime());
    const localNow = new Date(now.getTime());

    const isSameDay =
    localDate.getDate() === localNow.getDate() &&
    localDate.getMonth() === localNow.getMonth() &&
    localDate.getFullYear() === localNow.getFullYear();

    const yesterday = new Date(localNow);
    yesterday.setDate(localNow.getDate() - 1);

    const isYesterday =
    localDate.getDate() === yesterday.getDate() &&
    localDate.getMonth() === yesterday.getMonth() &&
    localDate.getFullYear() === yesterday.getFullYear();

    const hours = localDate.getHours().toString().padStart(2, "0");
    const minutes = localDate.getMinutes().toString().padStart(2, "0");

    if (isSameDay) {
        return `Hoje às ${hours}:${minutes}`;
    }

    if (isYesterday) {
        return `Ontem às ${hours}:${minutes}`;
    }

    // Formatação padrão: 12 Out, 2023
    const formattedDate = localDate.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

    return formattedDate;
}
