import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Arkan Faujdar",
  description: "Portfolio | Arkan Faujdar",
  keywords: [
    "Arkan Faujdar",
    "Duda",
    "Duda Website Builder",
    "Duda Developer",
    "Portfolio",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Web Developer",
  ],
  authors: [{ name: "Arkan Faujdar", url: "https://arkanfaujdar.com" }],
  creator: "Arkan Faujdar",
  publisher: "Arkan Faujdar",
  openGraph: {
    title: "Portfolio | Arkan Faujdar",
    description: "Portfolio | Arkan Faujdar",
    url: "https://arkanfaujdar.com",
    siteName: "Portfolio | Arkan Faujdar",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
