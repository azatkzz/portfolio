import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Azat | Growth",
  description: "Growth engineer, GTM adn marketing specialsit for startups",
  icons: {
    icon: "/front pics/1.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased font-sans min-h-screen flex flex-col bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white">
        <Navbar />
        <div className="flex-grow">
        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
