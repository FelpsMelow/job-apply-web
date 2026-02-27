export function clearSessionAndRedirect(path: string = "/login") {
    const keysToRemove = [
        "token",
        "user",
        "sideBarOptions",
        "sideBarSelectedOptions",
        "sideBarIsCollapsed",
        "theme",
    ];

    keysToRemove.forEach((key) => localStorage.removeItem(key));

    const currentPath = window.location.pathname;

    if (currentPath !== path) {
        window.location.href = path;
    }
}
