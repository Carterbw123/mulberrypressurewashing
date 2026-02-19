import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mulberry Pressure Washing",
  description:
    "Professional pressure washing and soft washing in Mulberry, GA. House washing, driveway cleaning, gutters & more.",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Script id="theme-init" strategy="beforeInteractive">{`(() => {
  try {
    const key = "mpw-theme";
    const stored = localStorage.getItem(key);
    if (stored === "dark") {
      document.documentElement.dataset.theme = "dark";
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute("content", "#0b1220");
    }
  } catch {}
})();`}</Script>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
