import { usePathname } from "next/navigation";

import { Urbanist } from "next/font/google";

import Footer from "@/components/footer";
import Header from "@/components/header";
import ThemeProvider from "@/components/partials/providers/theme-provider";
import ToastProvider from "@/components/partials/providers/toast-provider";
import MenuBottom from "@/components/ui/menu-bottom";
import { cn } from "@/core/utils";

import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

// notion
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
// used for rendering equations (optional)
import "katex/dist/katex.min.css";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import LoaderWrapper from "@/components/LoaderWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased", urbanist.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ToastProvider />
          <Header />

          <LoaderWrapper>{children}</LoaderWrapper>
          <MenuBottom />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
