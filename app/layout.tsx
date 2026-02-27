import type { Metadata, Viewport } from "next";
import { ToastContainer } from "react-toastify";
import AuthWrapper from "./providers/AuthWrapper";
import "./globals.css";

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
          <ToastContainer />
          {children}
        </AuthWrapper>
      </body>
    </html>
  );
}
