import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const manrope = Manrope({ subsets: ["latin", "greek"], variable: "--font-manrope", display: "swap" });
const inter = Inter({ subsets: ["latin", "greek"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  ...(siteConfig.url ? { metadataBase: new URL(siteConfig.url) } : {}),
  title: { default: "OPUS Studio — Creative Development Studio", template: "%s | OPUS Studio" },
  description: "Η OPUS Studio σχεδιάζει και αναπτύσσει σύγχρονες ψηφιακές εμπειρίες για επιχειρήσεις.",
  applicationName: "OPUS Studio",
  openGraph: { type: "website", locale: "el_GR", siteName: "OPUS Studio", title: "OPUS Studio — Creative Development Studio", description: "Σχεδιάζουμε και αναπτύσσουμε σύγχρονες ψηφιακές εμπειρίες που αναδεικνύουν την ταυτότητα κάθε επιχείρησης.", url: siteConfig.url || undefined },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#F3F1EC", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="el" className={`${manrope.variable} ${inter.variable}`}><body>{children}</body></html>;
}
