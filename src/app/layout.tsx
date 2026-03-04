import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const fontDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

const fontBody = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Distrito Adventista San José Pinula",
  description: "Sitio oficial del Distrito Adventista del Séptimo Día, San José Pinula, Guatemala.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${fontDisplay.variable} ${fontBody.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
