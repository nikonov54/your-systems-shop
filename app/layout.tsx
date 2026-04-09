import type { Metadata } from "next";
import "./globals.css";
import { Inter_Tight } from "next/font/google";

const interTight = Inter_Tight({ 
  subsets: ["cyrillic", "latin"], 
  variable: "--font-inter-tight" 
});

export const metadata: Metadata = {
  title: "YourSystems | Инженерные решения",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={interTight.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
