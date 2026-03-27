import type { Metadata, Viewport } from "next";
import { Anton, Inter, DM_Sans } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lattic — Plus de clients, tout simplement",
  description:
    "Lattic est votre agence digitale experte en référencement Google, avis clients, sites haute conversion et automatisation marketing pour les commerces locaux.",
  keywords: "agence SEO, référencement Google, avis Google, site web, marketing local, carte fidélité digitale",
  openGraph: {
    title: "Lattic — Plus de clients, tout simplement",
    description: "Référencement Google, avis certifiés, site haute conversion. Résultats en 30 jours.",
    locale: "fr_FR",
    type: "website",
    siteName: "Lattic",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F5F4F1",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${anton.variable} ${inter.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
