import type { Metadata } from "next";
import { Anton, Inter, DM_Sans } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "UGLYCASH",
  description: "Agence experte en référencement Google.",
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
