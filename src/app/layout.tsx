import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import { GoogleTagManager } from "@next/third-parties/google";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ClerkProvider from "@/components/partials/providers/clerk-provider";
import ModalProvider from "@/components/partials/providers/modal-provider";
import ThemeProvider from "@/components/partials/providers/theme-provider";
import ToastProvider from "@/components/partials/providers/toast-provider";
import MenuBottom from "@/components/ui/menu-bottom";
import { cn } from "@/core/utils";

import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "Persona Folio",
  description: "Developed by Persona Folio",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn("antialiased", urbanist.className)}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ModalProvider />
            <ToastProvider />
            <Header />
            {children}
            <MenuBottom />
            <Footer />
          </ThemeProvider>
          <GoogleTagManager gtmId="G-X0K6Z8S8LH" />
        </body>
      </html>
    </ClerkProvider>
  );
}
