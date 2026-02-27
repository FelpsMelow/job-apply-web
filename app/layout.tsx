import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "./providers/theme.provider";
import { UserProvider } from "./providers/user.provider";
import { ToastContainer } from "react-toastify";
import { SideBarProvider } from "./providers/sideBar.provider";
import { TaskProvider } from "./providers/task.provider";
import AuthWrapper from "./providers/AuthWrapper";
import { FilterOptionsProvider } from "./providers/filterOptions.provider";
import "./globals.css";
import { ExternalUserProvider } from "./providers/externalUser.provider";
import ModalHost from "./components/molecules/modal/ModalHost";
import FormDrawerHost from "./components/organisms/forms/formDrawerHost/FormDrawerHost";

export const metadata: Metadata = {
  title: "Gestão LEME",
  description: "Plataforma de gestão",
  manifest: "/manifest.json",
  icons: [
    { rel: "icon", url: "/icon-192x192.png" },
    { rel: "apple-touch-icon", url: "/icon-192x192.png" },
  ],
};

export const viewport: Viewport = {
  themeColor: "#317EFB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthWrapper>
          <UserProvider>
            <ThemeProvider>
              <SideBarProvider>
                <FilterOptionsProvider>
                  <TaskProvider>
                    <ExternalUserProvider>
                      <ToastContainer/>
                      <ModalHost />
                      <FormDrawerHost />
                      {children}
                    </ExternalUserProvider>
                  </TaskProvider>
                </FilterOptionsProvider>
              </SideBarProvider>
            </ThemeProvider>
          </UserProvider>
        </AuthWrapper>
      </body>
    </html>
  );
}
