export function clearSessionAndRedirect(path: string = "/login") {
  localStorage.removeItem("token");

  const currentPath = window.location.pathname;

  if (currentPath !== path) {
    window.location.href = path;
  }
}
