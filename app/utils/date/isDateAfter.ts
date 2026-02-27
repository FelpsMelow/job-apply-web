function parseDateDDMMYYYY(dateStr: string): Date {
    const [day, month, year] = dateStr.split('/').map(Number);
    return new Date(year, month - 1, day);
}

export function hasDatePassed(targetDateStr: string): {
    passed: boolean;
    daysRemaining: number;
} {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const targetDate = parseDateDDMMYYYY(targetDateStr);
    targetDate.setHours(0, 0, 0, 0);

    const diffInMs = targetDate.getTime() - today.getTime();
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

    const passed = diffInDays < 0;

    return {
        passed,
        daysRemaining: passed ? 0 : diffInDays,
    };
}
