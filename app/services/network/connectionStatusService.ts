export async function pingExternalConnection(timeout = 3000): Promise<boolean> {
    try {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), timeout);

        await fetch('https://clients3.google.com/generate_204', {
            method: 'GET',
            mode: 'no-cors',
            signal: controller.signal,
            cache: 'no-store',
        });

        clearTimeout(timer);
        return true;
    } catch {
        return false;
    }
}
